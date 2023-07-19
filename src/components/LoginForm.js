import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './loginform.css';

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
        <div className="cont">
            <div className='formInputGroup'>

                <input className='input'
                    onChange={(e) => getLoginData('username', e)} placeholder='username' />
            </div>
            <div className='formInputGroup'>

                <input
                    className='input'
                    onChange={(e) => getLoginData('password', e)} placeholder='password' />
            </div>
            <button className='button'
                onClick={login}>login</button>

        </div>
    )
}
