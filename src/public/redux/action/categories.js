import axios from 'axios'

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get(`http:/192.168.100.67:3002/category`)
    }
} 
export const addCategory = (name,icon) => {
  return {
      type: 'ADD_CATEGORIES',
      payload: axios.post(`http:/192.168.100.67:3002/category`, {category_name: name, icon: icon})
  }
}
export const deleteCategory = (id) => {
  return {
      type: 'DELETE_CATEGORIES',
      payload: axios.delete(`http:/192.168.100.67:3002/category/${id}`)
  }
} 