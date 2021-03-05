import React from 'react'
import clearImg from '../../../assets/img/play.svg'

const Details = ({details}) => {
  return (
    <div className="box">
      <p>Starting <span>{details.start_at}</span> <span className='cur'>$</span></p>
      <h3>{details.navigation_title}</h3>
      <p>{details.seo_description}</p>
      <button className='yellow'>Order now</button>
      <button className='outline'><img src={clearImg} alt="play"/> How it works</button>
    </div>
  )
}

export default Details


