import axios from 'axios'
import {baseUrl} from '../../config'
import {
  setCategoriesByServiceId,
  setDetailsByServiceId,
  setServices,
  setWorksByServiceId
} from '../reducers/serviceReducer'

export const getServicesApi = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${baseUrl}/api/services`)
      const {data} = response
      dispatch(setServices(data.data.items))
    } catch (e) {
      console.log('getServicesApi', e)
    }
  }
}

export const getDetailsByServiceId = (id = 2) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`${baseUrl}/api/services/content/${id}`)
      dispatch(setDetailsByServiceId(data.data.items))
    } catch (e) {
      console.log('getServicesApi', e)
    }
  }
}

export const getCategoriesByServiceId = (id = 2) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`${baseUrl}/api/services/categories/${id}`)
      dispatch(setCategoriesByServiceId(data.data.items))
    } catch (e) {
      console.log('getCategoriesByServiceId', e)
    }
  }
}

export const getWorksByServiceId = (id = 2) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`${baseUrl}/api/services/works/${id}`)
      dispatch(setWorksByServiceId(data.data.items))
    } catch (e) {
      console.log('getWorksByServiceId', e)
    }
  }
}
