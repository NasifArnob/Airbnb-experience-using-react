import { useState } from 'react'

export default function Hero(){
    return(
        <div className='hero--div'> 
            <img src="./src/assets/photo-grid.png" alt="Hero--img" className="hero-img" />
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}