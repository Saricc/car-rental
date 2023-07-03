import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import './nav.css';

export default function Navigation() {

    const navigate = useNavigate()
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        const cookie = new Cookies()

        const user = cookie.get('user')

        if (user) {

            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [])

    return (

        <div className="navContainer">

            <div className="navAboutRent">
                <div className="navLogo" onClick={() => navigate('/')} >CarRentSarah</div>
                <div onClick={() => navigate('/AboutUs')}>About us</div>
                <div onClick={() => navigate('/Rent')}>Rent
                </div> </div>

            <div className="navLog">
                {!isLogged && <div onClick={() => navigate('/Registration')}>Sign in</div>}
                {!isLogged && <div onClick={() => navigate('/Login')}>Login</div>}
                {isLogged && <div onClick={() => navigate('/Logout')}>Logout</div>}
            </div>


        </div >
    )
}

