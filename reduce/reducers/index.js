import { combineReducers } from 'redux'
import cartReducer from './cartReducer'

let reducer = combineReducers({
    reducer: cartReducer,

})

const rootReducer = (state, action) => {
    return reducer(state, action);
}

export default rootReducer