import {subscribe} from 'ice-cream';

function subscribe_ice_cream(listener) {
    return subscribe(state => {
        listener(state.ice_cream);
    });
}

export default {subscribe_ice_cream};
