import { combineReducers } from 'redux'
import { planets, search } from './reducer'

const mainReducer = combineReducers({
  planets,
  search,
})

export default mainReducer;
