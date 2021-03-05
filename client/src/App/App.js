import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../assets/css/styles.scss'
import {
  getCategoriesByServiceId,
  getDetailsByServiceId,
  getServicesApi,
  getWorksByServiceId
} from '../redux/actions/service'
import {Content, Services} from './components'

function App() {
  const dispatch = useDispatch()
  const services = useSelector(state => state.service.services)
  const [load, setLoad] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)
  let isMobile = (width <= 991)

  useEffect(() => {
    dispatch(getServicesApi())
    dispatch(getDetailsByServiceId())
    dispatch(getCategoriesByServiceId())
    dispatch(getWorksByServiceId())
    const timeOut = setTimeout(() => setLoad(false), 1000)
    return () => clearTimeout(timeOut)
  }, [])

  const handleWindowSizeChange = () =>  setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () =>  window.removeEventListener('resize', handleWindowSizeChange)
  }, [])

  return (
    <main>
      <Services isMobile={isMobile} setLoad={setLoad} services={services}/>
      <Content isMobile={isMobile} load={load}/>
    </main>
  )
}

export default App
