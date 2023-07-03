import { useEffect, useState } from "react";
import FormExample from "./RegistrationForm";
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment';
import PageWrapper from "./PageWrapper";

export default function Bill() {

    const params = useParams()

    console.log(params)
    const navigate = useNavigate()
    const [numberOfSelectedDays, setNumberOfSelectedDays] = useState(0)

    useEffect(() => {
        calculateSelectedNumberOfDays()
    }, [])

    function calculateSelectedNumberOfDays() {
        const start = moment(params.start)
        const end = moment(params.end)
        const totalDays = end.diff(start, "days") + 1;
        return totalDays
    }

    function calculateTotalPrice() {
        return params.price * calculateSelectedNumberOfDays()
    }

    console.log(calculateTotalPrice())

    return (
        <div>
            <PageWrapper>

                <div>Ukupna cijena najma automobila za {calculateSelectedNumberOfDays()} dana jest {calculateTotalPrice()} Eura</div>
                <div onClick={() => navigate('/')}>HOMEPAGE</div>
            </PageWrapper>
        </div>
    )
}