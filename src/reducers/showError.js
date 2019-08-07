import {SHOW_ERROR} from "../actions/types"


export default (state=false,action)=> {
    switch(action.type) {
        case SHOW_ERROR:

            return action.payload
            default:
                return state
    }
}