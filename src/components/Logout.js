import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


export default function Logout() {

    const navigate = useNavigate()

    useEffect(() => {
        const cookies = new Cookies()
        cookies.set('user', '', { path: '/' })
        navigate('/')
    }, [])

    return (
        <div>Logout</div>
    )
}
