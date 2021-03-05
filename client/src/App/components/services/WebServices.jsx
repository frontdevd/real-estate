import React from 'react'
import {ButtonBack, ButtonNext, CarouselProvider} from 'pure-react-carousel'
import {ServiceItem} from '../index';

const WebServices = ({btnActive, services, activeService, handleServiceItem}) => {
  return <CarouselProvider
    totalSlides={20}
    dragEnabled={false}
    orientation='vertical'
    step={5}>
    <ButtonBack>
      <img src={btnActive} alt=""/>
    </ButtonBack>
    <ServiceItem services={services}
               activeService={activeService}
               handleServiceItem={handleServiceItem}/>
    <ButtonNext>
      <img src={btnActive} alt=""/>
    </ButtonNext>
  </CarouselProvider>
}

export default WebServices