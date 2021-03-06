import React from 'react'
import moment from 'moment'

const Movie = ({movie}) => {
    return (
        <div className="movie-card card">
            { movie.poster_path ? <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} className="card-img-top" alt="Movie poster" /> : 
            <img className="card-img-top no-img" src="/img/no-img.png" alt="No movie poster"/> }
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">{moment(movie.release_date).format('DD.MM.YYYY')}</p>
            </div>
        </div>
    )
}



export default Movie
