import {mount, unmount} from './root';
import {store} from './store';

function subscribe(listener) {
    store.subscribe(() => listener(store.getState()))
}

export {mount, unmount, subscribe};