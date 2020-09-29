import axios from 'axios'

export const searchForMovies = (pageNumber, searchValue) => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=52c030c67dfc0498ec8a8e7cb063a13b&query=' + searchValue + '&page=' + pageNumber)
          .then((res) => {
              const moviesData = {
                  searchValue,
                  movies: res.data.results.sort((a, b) => b.popularity - a.popularity),
                  totalPages: res.data.total_pages,
                  page: res.data.page
              }
              dispatch({type: 'MOVIES_LIST', moviesData})
        })
    }
}


export const loadPopular = (pageNumber) => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52c030c67dfc0498ec8a8e7cb063a13b&page=' + pageNumber)
          .then((res) => {
            const moviesData = {
                searchValue: '',
                movies: res.data.results.sort((a, b) => b.popularity - a.popularity),
                totalPages: res.data.total_pages,
                page: res.data.page
            }
              dispatch({type: 'MOVIES_LIST', moviesData})
          })
    }
}