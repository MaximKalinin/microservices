import {createStore} from 'redux';

const save_ice_cream = ice_cream => ({
    type: 'SAVE_ICE_CREAM',
    payload: ice_cream
});

const initial_state = {
    ice_cream: ''
};

function reducer(state = initial_state, action) {
    switch(action.type) {
        case 'SAVE_ICE_CREAM':
            return {
                ...state,
                ice_cream: action.payload
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export {store, save_ice_cream};
