import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function LoginForm({ users }) {

    const navigate = useNavigate()
    const cookie = new Cookies()

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    function login() {
        let foundUser = ''
        users.forEach(client => {
            if (client.username === user.username && client.password === user.password) {
                foundUser = client
                return false

            }

        });
        if (foundUser) {
            cookie.set('user', foundUser, { path: '/' })
            navigate('/')


        } else alert('user not found')
    }


    function getLoginData(input, event) {
        const value = event.target.value
        console.log(value)
        const clonedUser = { ...user }
        clonedUser[input] = value
        setUser(clonedUser)


    }

    return (
        <div>
            <div className='formInputGroup'>
                <label>username</label>
                <input onChange={(e) => getLoginData('username', e)} />
            </div>
            <div className='formInputGroup'>
                <label>password</label>
                <input onChange={(e) => getLoginData('password', e)} />
            </div>
            <button onClick={login}>login</button>

        </div>
    )
}
