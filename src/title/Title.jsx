import React from 'react'
import './title.scss'
import dessert from './img/tarta.png'
import drag from './img/puntos.png'

export const Title = () => {
  return (
    <div className='cabezera'>
        <h1> Classic Cheesecake Recipe </h1>
        <div className='first-description'> 
          <img className='icon-drag' alt='puntos' src={drag}/>
          <p>  Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
        </div>
        <img className='postre' alt='tarta' src={dessert}/>
        
    </div>

        

    
  )
}
