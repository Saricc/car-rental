import { useEffect, useState } from "react"
import Cookies from 'universal-cookie';
import './nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {


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
        <Navbar expand="lg" className="navbar">

            <Container className="">
                <Navbar.Brand href="/" style={{ color: "red", fontWeight: "bolder", fontStyle: "italic", fontFamily: "fantasy" }}>♡ Car Rental Sarah ♡ </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto nav-link-wrapper" >

                        <Nav.Link href="/AboutUs">About us</Nav.Link>
                        <Nav.Link href="/Rent">Rent</Nav.Link>
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/Registration">Sign in</Nav.Link>

                        {isLogged && <Nav.Link href="/Logout">Logout</Nav.Link>}



                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

/*
        <div className="navContainer">

            <div className="navAboutRent">
                <div className="navLogo" onClick={() => navigate('/')} >CarRentSarah</div>
                <div onClick={() => navigate('/AboutUs')}>About us</div>
                <div onClick={() => navigate('/Rent')}>Rent
                </div>
            </div>

            <div className="navLog">
                {!isLogged && <div onClick={() => navigate('/Registration')}>Sign in</div>}
                {!isLogged && <div onClick={() => navigate('/Login')}>Login</div>}
                {isLogged && <div onClick={() => navigate('/Logout')}>Logout</div>}
            </div>


        </div >*/ 