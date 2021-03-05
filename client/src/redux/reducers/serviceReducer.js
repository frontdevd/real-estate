const SET_SERVICES = 'SET_SERVICES'
const SET_DETAILS_BY_ID = 'SET_DETAILS_BY_ID'
const SET_CATEGORIES_BY_ID = 'SET_CATEGORIES_BY_ID'
const SET_WORKS_BY_ID = 'SET_WORKS_BY_ID'

const initializeState = {
  services: [],
  details: [],
  categoriesById: [],
  works: [],
  active: 2,
}
export default function serviceReducer(state = initializeState, {type, payload}) {
  switch (type) {
    case SET_SERVICES:
      return {
        ...state,
        services: payload,
      }
    case SET_DETAILS_BY_ID:
      return {
        ...state,
        details: payload,
      }
    case SET_CATEGORIES_BY_ID:
      return {
        ...state,
        categoriesById: payload,
      }
    case SET_WORKS_BY_ID:
      return {
        ...state,
        works: payload,
      }
    default:
      return state
  }
}

// Action creators
export const setServices = services => ({type: SET_SERVICES, payload: services})
export const setDetailsByServiceId = details => ({type: SET_DETAILS_BY_ID, payload: details})
export const setCategoriesByServiceId = categories => ({type: SET_CATEGORIES_BY_ID, payload: categories})
export const setWorksByServiceId = works => ({type: SET_WORKS_BY_ID, payload: works})
