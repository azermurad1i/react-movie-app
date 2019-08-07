import {GET_MOVIE} from "../actions/types"


export default (state={},action)=> {
    switch(action.type) {
        case GET_MOVIE:
            return action.payload

        default:
        return null
    }
}