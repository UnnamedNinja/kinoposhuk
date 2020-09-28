import React, { Component } from 'react'
import Movie from './Movie'
import axios from 'axios';

class Movies extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52c030c67dfc0498ec8a8e7cb063a13b')
          .then((res) => {
            this.setState({
              movies: res.data.results.sort((a, b) => b.popularity - a.popularity)
            })
          })
    }

    render() {
        console.log(this.state)
        return (
            <section className="movies">
                <div className="container">
                    <h2>Popular Movies</h2>
                    <div className="movies-list">
                        { this.state.movies && this.state.movies.map(movie => {
                            return <Movie key={movie.id} movie={movie}/>
                        }) }
                    </div>
                </div>
            </section>
        )
    }
}



export default Movies
