import React from 'react'
import './Tricks.css'
import Card from '../Card/Card'

const Tricks = ({tricks}) => {

    const trickTiles = tricks.map(trick => {
        return (
            <div>
                <Card 
                  name={trick.name}
                  stance={trick.stance}
                  obstacle={trick.obstacle}
                  tutorial={trick.tutorial}
                  id={trick.id}
                  key={trick.id}
                />
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