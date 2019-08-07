import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from "../actions"
import {Link} from "react-router-dom"

 class MovieList extends Component {
     renderList=()=>{
        
         
         
         
         return this.props.movies.map(movie=>{
                return (
                    <div key={movie.data.imdbID} className="col-lg-4 col-md-6">
                   <div className="card item position-relative">
                   <img style={{height:"300px"}}className="card-img-top" src={movie.data.Poster} alt="Poster of movie"/>
                   <div className="card-body">
                     <h5 className="card-title">{movie.data.Title}</h5>
                     {movie.data.Plot.length<101? <p style={{height:"100px"}} className="card-text position-relative">{movie.data.Plot}</p>:<p style={{height:"100px"}} className="card-text position-relative">{movie.data.Plot.substring(0,100)}...</p>}
                     <Link to={`/details/${movie.data.imdbID}`}className="btn btn-primary">Details</Link>
                   </div>
                 </div>
                 </div>
                )

         })
     }
    render() {
        
        return (
            <div className="row">
               {this.props.movies.length!==0?this.renderList():null}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    
    return {
        movies:state.movies,
        error:state.error
    }
    
}

export default connect(mapStateToProps,actions)(MovieList)
