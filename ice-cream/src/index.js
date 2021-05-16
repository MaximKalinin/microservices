import {mount, unmount} from './root';
import {store} from './store';

function subscribe(listener) {
    return store.subscribe(() => listener(store.getState()))
}

export {mount, unmount, subscribe};