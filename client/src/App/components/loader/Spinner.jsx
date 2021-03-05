import React from 'react'
import Loader from 'react-loader-spinner'

const Spinner = ({toogleLoader}) => {
  return (
    <div className={toogleLoader ? 'show loader-wrapper' : 'hide loader-wrapper'}>
      <div className='loader-wrapper'>
        <Loader type="ThreeDots" color="#FFDB11" height={80} width={80}/>
      </div>
    </div>
  )
}

export default Spinner