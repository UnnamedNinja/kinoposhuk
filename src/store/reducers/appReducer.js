const initState = {
    moviesData: undefined
}


const appReducer = (state = initState, action) => {
    switch (action.type) {
        case 'MOVIES_LIST':
            return {
                ...state,
                moviesData: action.moviesData
            }
        default:
            return state
    }
}


export default appReducer