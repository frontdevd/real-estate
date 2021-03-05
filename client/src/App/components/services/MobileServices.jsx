import {CarouselProvider} from 'pure-react-carousel'
import {ServiceItem} from '../index';

const MobileServices = ({services, activeService, handleServiceItem}) => {
  return <CarouselProvider
    orientation='horizontal'
    step={1}>
    <ServiceItem services={services}
               activeService={activeService}
               handleServiceItem={handleServiceItem}/>
  </CarouselProvider>
}
export default MobileServices