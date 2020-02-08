import { FETCH_POSTS, NEW_POST,DELETE_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};


//This is going to evaluate the actions that are created
export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log('reducer')
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        case DELETE_POST:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
