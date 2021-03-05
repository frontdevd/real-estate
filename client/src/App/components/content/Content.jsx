import React from 'react'
import {useSelector} from 'react-redux'
import {Categories, Details, Gallery, Spinner} from '../index'

const Content = ({load, isMobile}) => {
  const details = useSelector(state => state.service.details)
  const categoriesById = useSelector(state => state.service.categoriesById)

  return (
    <div className='content-wrapper'>
      <h1>Our work</h1>
      {load && <Spinner/>}
      {!isMobile && <Categories categoriesById={categoriesById}/>}
      <div className="info-wrapper">
        <Details details={details}/>
        <Gallery/>
      </div>
    </div>
  )
}

export default Content
