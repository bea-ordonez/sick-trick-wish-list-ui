import React from 'react'
import './Tricks.css'

const Tricks = ({tricks}) => {

    const trickTiles = tricks.map(trick => {
        return (
            <div>
                <h2>{trick}</h2>
            </div>
        )
    })

    return (
        <div>
            {trickTiles}
        </div>
    )

}

export default Tricks;