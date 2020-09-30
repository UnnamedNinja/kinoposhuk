import React, { Component } from 'react'
import Movie from './Movie'
import { connect } from 'react-redux';
import { searchForMovies, loadPopular } from '../../store/actions/moviesActions'
import Pagination from '@material-ui/lab/Pagination';

class Movies extends Component {

    componentDidMount() {
        this.props.loadPopular('1');
    }

    handleCancelSearch = () => {
        this.props.loadPopular('1');
    }

    handlePopularPagination = (e, value) => {
        this.props.loadPopular(value)
    }

    handleSearchPagination = (e, value) => {
        this.props.searchForMovies(value, this.props.moviesData?.searchValue)
    }

    render() {
        return (
            <section className="movies">
                <div className="container">
                    { this.props.moviesData?.searchValue ? (
                        <>
                            <div className="search-results">
                                <span>{this.props.moviesData.searchValue} <i onClick={this.handleCancelSearch} className="fas fa-times"></i></span>
                            </div>
                            <div className="page-numeration">
                                <Pagination 
                                    className="pagination" 
                                    count={this.props.moviesData?.totalPages} 
                                    color="primary" 
                                    onChange={this.handleSearchPagination}
                                    page={this.props.moviesData?.page ? this.props.moviesData.page : 1}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>Popular Movies</h2>
                            <div className="page-numeration">
                                <Pagination 
                                    className="pagination" 
                                    count={this.props.moviesData?.totalPages} 
                                    color="primary" 
                                    onChange={this.handlePopularPagination}
                                    page={this.props.moviesData?.page ? this.props.moviesData.page : 1}
                                />
                            </div>
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
