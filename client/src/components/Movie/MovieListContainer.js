import React from "react";
import MovieList from "./MovieList";

class MovieListContainer extends React.Component {
    state = {
        movies: []
    }

    componentDidMount(){
        fetch("https://localhost:3000/movies",{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authoization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ1c2VyIiwiaWF0IjoxNTU4MDk5MDAyLCJleHAiOjE1NTgxMDI2MDJ9.U_s0Dm_cyndfKLthnK0-Dh3SJDqAzmjl8pa91Wr1CEs"
            },
            mode: 'cors'
        })
        .then(Response =>{
            if (Response.status !== 200) {
                throw new Error('Unable to fetch')
            } else {
                return Response.json();
            }
        })
        .then(data => {
            this.setState({
                movies: data,
                received: true
            });
        })
        .catch(() => console.log('error'));
    }

    render() {
        return <>
        {this.state.received && <span>loading...</span>}
        {this.state.received && <MovieList movies={this.state.movies}/>}
        </>
    }
}
    export default MovieListContainer;
