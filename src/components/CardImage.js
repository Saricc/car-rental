import React from 'react'

export default function CardImage({ height, src }) {
    return (
        <div style={{ height: height, backgroundImage: `url(${src})`, backgroundSize: "cover", width: "100%", backgroundPosition: "center" }}></div>
    )
}
