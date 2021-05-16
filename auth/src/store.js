import {createStore} from 'redux';

const auth = () => ({type: 'AUTH'});

const initial_state = {
    authenticated: false
};

function reducer(state = initial_state, action) {
    switch(action.type) {
        case 'AUTH':
            return {
                ...state,
                authenticated: true
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export {store, auth};
