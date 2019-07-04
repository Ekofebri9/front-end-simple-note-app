import { combineReducers } from 'redux'

import notes from './notes'
import category from './category'

const appReducer =combineReducers({
    notes,// es6 shorthand from notes: notes
    category
})

export default appReducer; 