import React from 'react'
import LoginForm from './LoginForm'
import { useEffect, useState } from "react"
import PageWrapper from './PageWrapper'

export default function Login() {


    const [users, setUsers] = useState([])


    useEffect(() => {
        ucitajUsere()
    }, [])

    function ucitajUsere() {
        fetch("http://localhost:3000/user").then(jsonData => jsonData.json()).then(users => {
            setUsers(users)
        })
    }

    return (
        <PageWrapper>
            <LoginForm users={users}></LoginForm>

        </PageWrapper>
    )


}
