import './footer.css'

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
}