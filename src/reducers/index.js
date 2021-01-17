import { combineReducers } from 'redux'
import loginReduce from './login_reducer'


const Allreducers = combineReducers({
    isLoggedIN : loginReduce
})

export default Allreducers