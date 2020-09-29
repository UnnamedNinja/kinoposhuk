import axios from 'axios'

export const searchForMovies = (searchValue) => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=52c030c67dfc0498ec8a8e7cb063a13b&query=' + searchValue)
          .then((res) => {
              const moviesData = {
                  searchValue,
                  movies: res.data.results
              }
              dispatch({type: 'MOVIES_LIST', moviesData})
        })
    }
}


export const loadPopular = () => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52c030c67dfc0498ec8a8e7cb063a13b')
          .then((res) => {
            const moviesData = {
                searchValue: '',
                movies: res.data.results
            }
              dispatch({type: 'MOVIES_LIST', moviesData})
          })
    }
}