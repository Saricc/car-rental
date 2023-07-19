import { useEffect, useState } from "react"
import PageWrapper from "./PageWrapper"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Modal } from "@mui/material";
import RentalCalendar from "./RentalCalendar";
import Cookies from 'universal-cookie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardImage from "./CardImage";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor:
        "lightblue",
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
            <Container>
                <Row className="gy-2">


                    {carData.length > 0 && carData.map(car => {
                        return <Col lg="3" md="6" sm="12"
                        >
                            <Card key={`car-${car.id}`} style={{ backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }}>
                                <CardImage height={180}
                                    src={car.image} />
                                <Card.Body>
                                    <Card.Title>{car.model}</Card.Title>
                                    <Card.Text>
                                        {car.brand},  {car.year}
                                    </Card.Text>

                                    <Card.Text>
                                        Price per day - {car.price}€
                                    </Card.Text>

                                    {isLogged && <div className="d-grid">
                                        <Button size="sm" variant="primary" onClick={() => showCalendar(car.id)}>RENT</Button></div>}

                                </Card.Body>
                            </Card>
                        </Col>
                    })}

                </Row>
            </Container>




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