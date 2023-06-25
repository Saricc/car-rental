export default function PrikazStavke(carId) {

    return (
        <div>
            <div className="kontejnerStavke">
                <div style={{ color: "#fff" }}>

                    {carData.map(car => {
                        return <div style={{ display: "flex", flexDirection: "row" }}>
                            <div><img src={car.image} /></div>

                            <div>{car.id}</div>
                            <div>{car.brand}</div>
                            <div>{car.model}</div>
                            <div>{car.rented ? "rented" : "not rented"}</div>
                            <div>{car.price}</div>
                            <button>rent now</button>
                        </div>
                    })}

                </div>
            </div>

        </div>
    )
}