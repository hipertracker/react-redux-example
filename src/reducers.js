import Immutable from 'immutable';
import {
    ADD_TODO,
    REMOVE_TODO
} from './actions';


export function todos(state = Immutable.List(), action) {
    switch (action.type) {
        case ADD_TODO:
            return state.push(action.text);
        case REMOVE_TODO:
            return state.delete(action.index);
        default:
            return state;
    }
}
