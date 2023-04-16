import React from 'react'
import Tile from './Tile'


function TileList({ hogs }) {

    const piggies = hogs.map(hogObj => <Tile key={hogObj.weight} hog={ hogObj }/>)

  return (
    <div className='ui special cards' >
      { piggies }
    </div>
  )
}

export default TileList
