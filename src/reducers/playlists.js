const initialState = [
    'Home',
    'Work'
];

export default function playList(state = initialState, action) {
    if (action.type === 'ADD_PLAYLIST') {
        return state;
    }
    return state;
}