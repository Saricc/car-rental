import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function Navigacija({ boja }) {

    const navigate = useNavigate()

    return (

        <div style={{
            display: "flex", flexDirection: "row", gap: 40, fontSize: 30, fontWeight:
                "bold", fontFamily: "fantasy", border: '1px solid green', backgroundColor: "yellow"
        }}>

            <div onClick={() => navigate('/')} style={{ fontSize: 40, color: "green", fontWeight: "bolder", fontFamily: "sans-serif" }}>CarRentSarah</div>
            <div onClick={() => navigate('/Onama')}>O nama</div>
            <div onClick={() => navigate('/Iznajmi')}>Iznajmi</div>
            <div>Kupi</div>

        </div >
    )
}

