import React from 'react'
import {Slide, Slider} from 'pure-react-carousel'
import {baseUrl} from '../../../config';

const ServiceItem = ({services, handleServiceItem, activeService}) => {
  return (
    <Slider>
      <Slide index={0}>
        {services.map(s => <div
            className={s.id === activeService ? 'active-service service-item' : 'service-item'}
            onClick={() => handleServiceItem(s.id)}
            key={s.id} >
            <img src={baseUrl + '/' + s.active_icon} alt="icon"/>
            <p>{s.title}</p>
          </div>
        )}
      </Slide>
    </Slider>
  )
}

export default ServiceItem