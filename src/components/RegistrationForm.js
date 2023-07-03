import { useState } from "react"



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

        <div className='registrationForm' >
            {Object.keys(formInputValues).map(inputName => {
                return <div className='formInputGroup' key={`input-${inputName}`}>
                    <label>{formInputValues[inputName].label}</label>
                    <input onChange={(e) => updateFormInputValues(inputName, e)} />
                </div>
            })}
            <button onClick={registerUser} >register</button>
        </div>
    )

}

