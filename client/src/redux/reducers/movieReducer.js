const movieReducer = (state = {
    movies: []
}, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES_RECEIVED': {
            return {
                ...state,
                movies: action.payload.movies,
                received: false
            };
        }
        default:
        return state;
    }
}
export default movieReducer;