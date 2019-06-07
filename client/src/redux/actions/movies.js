export function fetchMovies(dispatch) {
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
            dispatch({
                type: "FETCH_MOVIES_REQUESTED",
                payload: {
                    movies: data
                }
            });
        })
        .catch(() => console.log('error'));
    return {
        type: "FETCH_MOVIES_REQUESTED"
    }

}