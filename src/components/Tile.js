import React, { useState } from 'react'

const Image = ({image}) =>  <img src={image} alt='hog pic'/>
const Details = ({hog}) => {
  return (
   <>
   <h3>Name: {hog.name}</h3>
   <h3>Specialty: {hog.specialty}</h3>
   <h3>Weight: {hog.weight}</h3>
   <h3>Highest Medal Achieved: {hog['highest medal achieved']}</h3>
    {hog.greased ? <h3>Greased up!</h3> : <h3>No Grease</h3>}
   </>
  )

}

function Tile({ hog }) {

  const [hogDetails, setHogDetails] = useState(false)

  function showDetails() {
    setHogDetails(!hogDetails)
  }

  return (

    <li className= 'pigTile ui raised card' onClick={showDetails}>
      <h1>{hog.name}</h1>
      { hogDetails ? <Details hog={hog} /> : <Image name={hog.name} image={hog.image}/>}
    </li>
  )
}

export default Tile