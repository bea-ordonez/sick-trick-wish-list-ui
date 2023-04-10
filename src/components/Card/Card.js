import React from 'react'
import './Card.css'

const Card = ({stance, name, obstacle, tutorial}) => {
    return (
        <div className='card'>
            <h3>Name: {name}</h3>
            <p>Obstacle: {obstacle}</p>
            <p>Stance: {stance}</p>
            <p>Tutorial: {tutorial}</p>
        </div>
    )
}

export default Card;