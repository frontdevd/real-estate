import React, {Fragment, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCategoriesByServiceId, getDetailsByServiceId, getWorksByServiceId} from '../../../redux/actions/service'
import btnActive from '../../../assets/img/btn-active.svg'
import {MobileServices, WebServices} from '../index'


const Services = ({services}) => {
  const dispatch = useDispatch()
  const active = useSelector(state => state.service.active)
  const [activeService, setActiveService] = useState(active)

  const handleServiceItem = id => {
    setActiveService(id)
    dispatch(getDetailsByServiceId(id))
    dispatch(getCategoriesByServiceId(id))
    dispatch(getWorksByServiceId(id))
  }

  return (
    <Fragment>
      <div className='mobile-wrapper'>
        <MobileServices
          services={services}
          activeService={activeService}
          handleServiceItem={handleServiceItem}/>
      </div>
      <div className='service-wrapper'>
        <WebServices
          btnActive={btnActive}
          services={services}
          activeService={activeService}
          handleServiceItem={handleServiceItem}/>
      </div>
    </Fragment>
  )
}

export default Services
