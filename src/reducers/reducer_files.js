import {GET_FILES, NEW_FILE, DELETE_FILE} from '../actions/index';

const INITIAL_STATE ={all: [], file: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case GET_FILES:
            return {...state, all: action.payload};
        case NEW_FILE:
            // do nothing
            return state;
        case DELETE_FILE:
            // filter out files that have id equal to action.payload.id
            // this could be a hash for easier lookup, but this is fine (yet
            // slightly more verbose)
            var newAll = state.all.filter(function(el) {
                return el.id !== action.payload.id;
            });
            return { ...state, all: newAll};
        default:
            return state;
    }
}
