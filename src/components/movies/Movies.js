import React, { Component } from 'react'
import Movie from './Movie'
import { connect } from 'react-redux';
import { searchForMovies, loadPopular } from '../../store/actions/moviesActions'

class Movies extends Component {

    componentDidMount() {
        this.props.loadPopular();
    }

    handleClick = () => {
        this.props.loadPopular();
    }

    render() {
        return (
            <section className="movies">
                <div className="container">
                    { this.props.moviesData?.searchValue ? (
                        <div className="search-results">
                            <span>{this.props.moviesData.searchValue} <i onClick={this.handleClick} className="fas fa-times"></i></span>
                        </div>
                    ) : (
                        <h2>Popular Movies</h2>
                    )}
                    <div className="movies-list">
                        { this.props.moviesData && this.props.moviesData.movies.map(movie => {
                            return <Movie key={movie.id} movie={movie}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        moviesData: state.app.moviesData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchForMovies: (value) => dispatch(searchForMovies(value)),
        loadPopular: () => dispatch(loadPopular())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
