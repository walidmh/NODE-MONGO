import React from "react";
import {connect} from "react-redux";
import MovieList from "./MovieList";
import {fetchMovies} from "../../redux/actions/reducers"

class MovieListContainer extends React.Component {
    render() {
        return <>
        {this.state.received && <span>loading...</span>}
        {this.state.received && <MovieList movies={this.propos.movies}/>}
        </>
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer.movies,
        received: state.movieReducer.received
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: dispatch(fetchMovies())
    }
}
    export default connect(mapDispatchToProps, mapStateToProps)(MovieListContainer);
