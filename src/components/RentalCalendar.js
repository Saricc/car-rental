import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function RentalCalendar({ selectedCar, setSelectedCar, setShowModal }) {

    const cookie = new Cookies()
    const navigate = useNavigate()

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [isDateAvailable, setIsDateAvailable] = useState(true)


    //provjera je li nas odabir slobodan

    function selectedDate(picked) {
        if (!picked[0] || !picked[1]) {
            return false
        }
        const selectedStartDate = parseInt(picked[0].format("YYYYMMDD"));
        const selectedEndDate = parseInt(picked[1].format("YYYYMMDD"));
        setStartDate(selectedStartDate)
        setEndDate(selectedEndDate)

        let isTakenDate = false

        selectedCar.rentData.forEach(reservation => {
            if (selectedStartDate < reservation.endDate && selectedEndDate > reservation.startDate) {
                isTakenDate = true
                return false
            }
            else isTakenDate = false

        });
        console.log(isTakenDate ? "zauzeto" : "dostupno")
        setIsDateAvailable(!isTakenDate)

    }
    //provjera je li dan slobodan, ako nije zatamni ga https://mui.com/x/react-date-pickers/validation/#disable-specific-dates
    function isDateDisabled(date) {

        const selectedDate = parseInt(date.format("YYYYMMDD"));
        let isBetween = false

        selectedCar.rentData.forEach(reservation => {
            console.log(reservation)


            if (selectedDate >= reservation.startDate && selectedDate <= reservation.endDate) {
                isBetween = true
                return false
            }
            else isBetween = false

        });
        return isBetween

    }
    //  console.log(selectedCar)
    function storeReservation() {
        const cookieData = cookie.get('user')
        const selectedCarClone = { ...selectedCar }
        selectedCarClone.rentData.push({ startDate: startDate, endDate: endDate, userId: cookieData.id })
        fetch(`http://localhost:3000/cars/${selectedCar.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedCarClone)
        }).then(res => {
            if (res.ok) {
                //navigate('/')
                setSelectedCar(selectedCarClone)
                setShowModal(false)
                navigate(`/Bill/${selectedCarClone.id}/${startDate}/${endDate}/${selectedCarClone.price}`)
            }
            else {
                alert(res.statusText)
            }

        })
    }

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                    <DateRangePicker
                        shouldDisableDate={isDateDisabled}
                        localeText={{ start: 'Check-in', end: 'Check-out' }}
                        onChange={selectedDate}
                    />
                    <button
                        style={{ width: 150 }}
                        disabled={!startDate || !endDate || !isDateAvailable}
                        //  onClick={() => navigate(`/Racun/${id}/${startDate}/${endDate}/${cijena}`)}
                        onClick={() => storeReservation()}
                    >
                        Rent
                    </button>
                </DemoContainer>
            </LocalizationProvider>
            <div className="font-belissimo">{isDateAvailable ? "This car is available for selected days" : "NOT available for selected days"}</div>
        </div>
    )
}