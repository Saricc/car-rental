import { useEffect, useState } from "react"
import PageWrapper from "./PageWrapper"
import Footer from "./Footer/Footer"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Iznajmi() {

    const [carData, setCarData] = useState([])


    useEffect(() => {
        ucitajAuta()
    }, [])

    function ucitajAuta() {
        fetch("http://localhost:3000/cars").then(jsonData => jsonData.json()).then(carData => {
            setCarData(carData)
        })
    }



    return (
        <PageWrapper>

            <div style={{ color: "#fff", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 12 }}>

                {carData.map(car => {
                    return <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={car.image} />
                        <Card.Body>
                            <Card.Title>{car.brand}-{car.model}</Card.Title>
                            <Card.Text>
                                {car.rented ? "rented" : "not rented"}
                            </Card.Text>
                            <Card.Text>
                                CIJENA -  {car.price}
                            </Card.Text>
                            <Button variant="primary">RENT</Button>
                        </Card.Body>
                    </Card>

                })}

            </div>
            <Footer />
        </PageWrapper >
    )
}