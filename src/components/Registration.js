import { useNavigate, useNavigation } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import PageWrapper from './PageWrapper';

export default function Registration() {

    const navigate = useNavigate();

    function storeRegData(data) {
        const formatedData = {};
        Object.keys(data).forEach(key => {
            formatedData[key] = data[key].value
        })

        console.log(data)
        console.log(formatedData)
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formatedData)
        }).then(res => {
            if (res.ok) {
                alert('registration succesfull')
                navigate('/Login')
            }
            else {
                alert(res.statusText)
            }
        })

    }

    return (
        <PageWrapper>
            <RegistrationForm storeRegData={storeRegData}></RegistrationForm>

        </PageWrapper>
    )

}