import {SEARCH_MOVIE} from "../actions/types"


export default (state=[],action)=> {
  switch(action.type) {
      case SEARCH_MOVIE:

      if(action.payload.data.Response==="False") {
        return [...state]
      }
      else {
        return [...state,action.payload]
      }

     
       
      
          
         

          default:
              return state
  }
}