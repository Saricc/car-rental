import { useEffect, useState } from "react"
import PageWrapper from "./PageWrapper"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Modal } from "@mui/material";
import RentalCalendar from "./RentalCalendar";
import Cookies from 'universal-cookie';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'pink',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Rent() {
    const [isLogged, setIsLogged] = useState('')
    const [carData, setCarData] = useState([])
    const [selectedCar, setSelectedCar] = useState({})
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        loadCars()
        const cookie = new Cookies()
        const user = cookie.get('user')
        if (user) {
            setIsLogged(user)

        }
    }, [])

    function showCalendar(id) {
        setSelectedCar(getCarById(id))
        setShowModal(true)
    }

    function getCarById(id) {
        let foundCar
        carData.forEach(car => {
            if (car.id === id) {
                foundCar = car
            }
        })
        return foundCar
    }

    function hideCalendar() {
        setSelectedCar({})
        setShowModal(false)
    }

    function loadCars() {
        fetch("http://localhost:3000/cars").then(jsonData => jsonData.json()).then(carData => {
            setCarData(carData)
        })
    }

    // s map mozemo direktno u returnu radit, mapo mora imat retunr svoj
    return (
        <PageWrapper>

            <p style={{ color: "whitesmoke" }}>TO RENT YOU HAVE TO BE LOGGED IN</p>
            <div style={{ color: "#fff", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 12 }}>

                {carData.length > 0 && carData.map(car => {
                    return <Card style={{ width: '16rem' }} key={`car-${car.id}`}>
                        <Card.Img variant="top" src={car.image} />
                        <Card.Body>
                            <Card.Title>{car.brand}</Card.Title>
                            <Card.Text>
                                {car.model}
                            </Card.Text>
                            <Card.Text>
                                CIJENA -  {car.price}
                            </Card.Text>

                            {isLogged && <Button variant="primary" onClick={() => showCalendar(car.id)}>RENT</Button>}

                        </Card.Body>
                    </Card>
                })}
            </div>


            <Modal
                open={showModal}
                onClose={hideCalendar}
            >
                <Box sx={style}>
                    <div className="font-belissimo">
                        Brand : {selectedCar.brand}
                        <p>
                            Model : {selectedCar.model}
                        </p>
                        Price per day: {selectedCar.price} Euros
                    </div>

                    <RentalCalendar
                        setShowModal={setShowModal}
                        setSelectedCar={setSelectedCar}
                        selectedCar={selectedCar}
                    />

                </Box>
            </Modal>
        </PageWrapper >
    )
}