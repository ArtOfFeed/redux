const api = [
    {
        id: 1,
        name: 'Bobby'
    },
    {
        id: 2,
        name: 'Highlander'
    },
    {
        id: 3,
        name: 'Avengers'
    },
    {
        id: 4,
        name: 'Guardian of galaxy'
    },


];

export const getTracks = () => dispatch => {
    dispatch({type: 'FETCH_TRACKS', payload: api})
};