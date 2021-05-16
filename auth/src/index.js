import {mount, unmount} from './root';
import {store} from './store';
import {init_state_manager} from './state-manager';

function subscribe(listener) {
    store.subscribe(() => listener(store.getState()))
}

function init(default_state_manager) {
    init_state_manager(default_state_manager);
}

export {mount, unmount, subscribe, init};
