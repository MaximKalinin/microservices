import {mount, init} from '../src';

init({subscribe_ice_cream: listener => listener('vanilla')});

mount(document.getElementById('root'));
