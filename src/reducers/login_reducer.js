import log_in_action from '../actions/login_IN'
// import action from '../actions'


const loginReduce = (state = false , action) => {
    switch (action.type) {
        case 'LOG_IN':
           return !state
        default:
            return state;
    }
}

export default loginReduce