import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Route } from "react-router-dom";

export default function RegistrationForm({ storeRegData }) {

    const [formInputValues, setFormInputValues] = useState({
        firstName: { label: 'first name', value: '' },
        lastName: { label: 'last name', value: '' },
        city: { label: 'city', value: '' },
        phoneNumber: { label: 'phone number', value: '' },
        numberID: { label: 'ID number', value: '' },
        username: { label: 'username', value: '' },
        password: { label: 'password', value: '' }
    })

    function updateFormInputValues(inputName, event) {
        const value = event.target.value
        const cloneFormInputValues = { ...formInputValues };
        cloneFormInputValues[inputName].value = value
        setFormInputValues(cloneFormInputValues)
    }

    function registerUser() {
        let inputsHaveValue = true
        Object.keys(formInputValues).forEach(key => {
            if (!formInputValues[key].value) {
                inputsHaveValue = false
                return false
            }
        })
        if (inputsHaveValue) {
            storeRegData(formInputValues)
        }
        else {
            console.log('input missing value')
        }
    }
    return (


        <Container>
            <Col xxl="6">
                {Object.keys(formInputValues).map(inputName => {
                    return <Row key={`input-${inputName}`}>
                        <Form.Label  >{formInputValues[inputName].label}</Form.Label>


                        <Form.Control style={{ background: "pink" }}
                            onChange={(e) => updateFormInputValues(inputName, e)}
                            type="text"
                        />
                    </Row>

                })}
                <div className="d-grid" style={{ marginTop: 24 }}>
                    <Button style={{ background: "gray", width: "80px" }}
                        onClick={registerUser} variant="primary">Register</Button>
                </div>
            </Col>
        </Container>

    )

}

