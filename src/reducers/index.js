import {combineReducers} from "redux"
import renderMovies from "./renderMovies"
import showError from "./showError"
import getMovie from "./getMovie"


export default combineReducers({
    movies:renderMovies,
    error:showError,
    getMovie:getMovie
})