import React, { Component } from 'react'
import * as actions from "../actions"
import {connect} from "react-redux"
import MovieList from "./MovieList"
import {bindActionCreators} from "redux"


class Home extends Component {
    state={
        title:"",
        error:``
    }


    componentDidUpdate(prevProps) {
       if(prevProps.movies.length!==this.props.movies.length) {
           this.props.showError(false)
       } 
    }

    showError=()=>{
       setTimeout(()=>{
        this.setState({error:"Please add valid value"})
       },500)
       return <p className="text-danger mt-5 position-absolute">{this.state.error}</p>
    }

    handleSubmit=e=>{

        e.preventDefault()
        this.props.renderMovie(this.state.title)
        this.setState({title:''})
        if(!this.props.error) {
            this.setState({error:""})
        }
        this.props.showError(true)
        setTimeout(()=>{
            this.props.showError(false)
        },5000)
       
    }
    render() {

    return (
            <React.Fragment>
                <div className="details">
                 <div className="container">
            <div className="row mt-4 mb-5">
                <div className="col-md-8 mx-auto">
            <form onSubmit={e=>this.handleSubmit(e)} className="position-relative form-inline md-form form-sm active-cyan-2 mt-2 d-flex justify-content-between">
            <input value={this.state.title} onChange={e=>this.setState({title:e.target.value})} style={{width:"100%"}} className="form-control py-4 search form-control-sm mr-3" type="text" placeholder="Search  movie  or  TV  series"
              aria-label="Search"/>
              {this.props.error?this.showError():null}
          </form>
          </div>
          </div>
          <MovieList/>
          </div>
          </div>
          </React.Fragment>
          
        )
    }
}

const mapStateToProps=state=>{

    
    return {
        movies:state.movies,
        error:state.error
    }
}

const mapDispatchToProps=dispatch=>{
    return bindActionCreators(actions,dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
