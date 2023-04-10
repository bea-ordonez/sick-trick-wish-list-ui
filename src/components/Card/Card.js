import React from 'react'
import './Card.css'

const Card = ({stance, name, obstacle, tutorial}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{obstacle}</p>
            <p>{stance}</p>
            <p>{tutorial}</p>
        </div>
    )
}

export default Card;