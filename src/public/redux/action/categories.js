import axios from 'axios'

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
      // payload: axios.get(`http:/192.168.6.153:3002/category`)
       payload: axios.get(`http:/192.168.100.67:3002/category`)
      // payload: axios.get(`http:/192.168.43.142:3002/category`)
    }
} 
export const addCategory = (name) => {
  return {
      type: 'ADD_CATEGORIES',
    // payload: axios.get(`http:/192.168.6.153:3002/category`)
     payload: axios.post(`http:/192.168.100.67:3002/category`, {category_name: name})
    // payload: axios.get(`http:/192.168.43.142:3002/category`)
  }
} 