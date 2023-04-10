import React from 'react'
import './Tricks.css'
import Card from '../Card/Card'

const Tricks = ({tricks}) => {

    const trickTiles = tricks.map(trick => {
        return (
                <Card 
                  name={trick.name}
                  stance={trick.stance}
                  obstacle={trick.obstacle}
                  tutorial={trick.tutorial}
                  id={trick.id}
                  key={trick.id}
                />
        )
    })

    return (
        <div className='tricks-container'>
            {trickTiles}
        </div>
    )

}

export default Tricks;