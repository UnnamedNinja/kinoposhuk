import React, { Component } from 'react'
import Movie from './Movie'
import { connect } from 'react-redux';
import { searchForMovies, loadPopular } from '../../store/actions/moviesActions'
import PageNumbers from '../layout/PageNumbers'

class Movies extends Component {

    componentDidMount() {
        this.props.loadPopular('1');
    }

    handleClick = () => {
        this.props.loadPopular('1');
    }

    render() {
        return (
            <section className="movies">
                <div className="container">
                    { this.props.moviesData?.searchValue ? (
                        <>
                            <div className="search-results">
                                <span>{this.props.moviesData.searchValue} <i onClick={this.handleClick} className="fas fa-times"></i></span>
                            </div>
                            <PageNumbers 
                                totalPages={this.props.moviesData?.totalPages}
                                loadPage={this.props.searchForMovies}
                                searchValue={this.props.moviesData.searchValue}
                                page={this.props.moviesData.page}
                            />
                        </>
                    ) : (
                        <>
                            <h2>Popular Movies</h2>
                            <PageNumbers 
                                totalPages={this.props.moviesData?.totalPages}
                                loadPage={this.props.loadPopular}
                                page={this.props.moviesData?.page}
                            />
                        </>
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
    return {
        moviesData: state.app.moviesData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchForMovies: (pageNumber, value) => dispatch(searchForMovies(pageNumber, value)),
        loadPopular: (pageNumber) => dispatch(loadPopular(pageNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
