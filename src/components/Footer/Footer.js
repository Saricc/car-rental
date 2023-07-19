import React from "react"
import './footer.css'


const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">AVAILABLE at:</h5>
                <ul className="list-unstyled">
                    <li>SPLIT, Matoseva ulica 3</li>
                    <li>ZAGREB, Zvonimirova 19</li>
                    <li>OSIJEK, Grabova 70</li>

                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">CONTACT US</h5>
                <ul className="list-unstyled">
                    <li>sarahrental@rental.hr</li>
                    <li>phone - 0800 9632</li>
                    <li>fax - 7685555</li>

                </ul>
            </div>


        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a > smdev</a>
    </div>

</footer>

export default Footer



/*import './footer.css'

export default function Footer() {

    return (

        <div className='footer' >
            <div className='whyus'>
                <h1> Why us?</h1>
                <p>
                    Because we are in bussiness  for over 40 years
                </p>
            </div>
            <div className='cities'><ul>
                <li>Split</li>
                <li>Zagreb</li>
                <li>Rijeka</li>

            </ul></div>
            <div className='contact'>

                <ul>
                    <li>Mobitel 0975544324</li>
                    <li>email obrazac</li>
                </ul>
            </div>
        </div>
    )
}*/