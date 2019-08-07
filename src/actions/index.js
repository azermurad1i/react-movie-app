import {SEARCH_MOVIE,SHOW_ERROR,GET_MOVIE} from "./types"
import axios from "axios"



export const renderMovie=title=>{
   let response=axios.get(`http://www.omdbapi.com/?t=${title}&apikey=20f920e9`)

   return {
       type:SEARCH_MOVIE,
       payload:response
   }
}
export const getMovie=id=>{
    let response=axios.get(`http://www.omdbapi.com/?i=${id}&apikey=20f920e9`)

    return {
        type:GET_MOVIE,
        payload:response
    }
}
export const showError=(alma)=>{
    
    return {
        type:SHOW_ERROR,
        payload:alma
    }
}