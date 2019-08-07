import React, { Component } from 'react'
import {connect} from "react-redux"
import * as actions from "../actions"

class Details extends Component {

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
    }
    render() {
       let movie=this.props.movie
       
       if(movie!==null) {
        return (
            <div className="details">
            <div className="container">
            <div style={{marginTop:"0%"}} className="row">
             
            <div className="col-md-4">
                <img className="img-fluid" src={movie.data.Poster} alt="Poster of movie"/>
                <p className="mt-3">{movie.data.Plot}</p>
            </div>
            <div className="col-md-offset-1 col-md-7">
               <div className="details-wrapper">
                   <div className="row">
                   <div className="col-md-10 mb-5">
                    <h1 className="">{movie.data.Title} ({movie.data.Year})</h1>
                    <div className="more d-flex">
                        <h6>{movie.data.Runtime} |  </h6>
                    <h6>{movie.data.Genre}</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="imbd d-flex">
                    <h3 className="text-warning mr-2"><i className="fas fa-star"></i></h3>
                    <div className="vote">
                        <h3>{movie.data.imdbRating}</h3>
                        <h6>{movie.data.imdbVotes}</h6>
                    </div>
                </div>
                </div>
                  
                    <div className="col-md-6">
                    <div className="detail mb-5">
                       <h4>Actors</h4>
                       <span>{movie.data.Actors}</span>
                   </div>
                    </div>
                    <div className="col-md-6">
                    <div className="detail mb-5">
                       <h4>Writer</h4>
                       <span>{movie.data.Writer}</span>
                   </div>
                    </div>
                    <div className="col-md-6 mb-5">
                    <div className="detail">
                       <h4>Type</h4>
                       <span>{movie.data.Type==="series"?`TV Series`:"Movie"}</span>
                   </div>
                    </div>
                   </div>
   
               </div>
            </div>
            </div>
            </div>
            </div>
        )
        
       }
       return (
           <div>Loading</div>
       )
     
     
       
        
     
       
    }
}

const mapStateToProps=state=>{
    return {
        movie:state.getMovie
        
    }
}

export default connect(mapStateToProps,actions)(Details)
