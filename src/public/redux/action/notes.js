import axios from 'axios'

export const getNotes = (id,sort,page) => {
    return {
        type: 'GET_NOTES',
        payload: axios.get(`http:/192.168.100.67:3002/note?category_id=${id}&sort=${sort}&page=${page}`)
    }
}
export const getNotesNext = (id, sort, page) => {
  return {
      type: 'GET_NOTESN',
      payload: axios.get(`http:/192.168.100.67:3002/note?category_id=${id}&sort=${sort}&page=${page}`)
  }
}
export const searchNotes = (id,search,sort,page) => {
  return {
      type: 'SEARCH_NOTES',
      payload: axios.get(`http:/192.168.100.67:3002/note?category_id=${id}&search=${search}&sort=${sort}&page=${page}`)
  }
}
export const searchNotesNext = (id,search,sort,page) => {
  return {
      type: 'SEARCH_NOTESN',
      payload: axios.get(`http:/192.168.100.67:3002/note?category_id=${id}&search=${search}&sort=${sort}&page=${page}`)
  }
} 
export const addNote = (title,content,categoryId) => {
    return {
        type: 'ADD_NOTES',
        payload: axios.post(`http:/192.168.100.67:3002/note`,
        { title: title,
          content: content,
          id_category: categoryId
        })
    }
} 
export const updateNote = (id,title,content,categoryId) => {
  return {
      type: 'UPDATE_NOTES',
      payload: axios.patch(`http:/192.168.100.67:3002/note`,
      { id_note: id,
        title: title,
        content: content,
        id_category: categoryId
      })
  }
} 
export const deleteNote = (id) => {
  return {
      type: 'DELETE_NOTES',
      payload: axios.delete(`http:/192.168.100.67:3002/note/${id}`)
  }
} 