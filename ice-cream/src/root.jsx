import {Provider} from 'react-redux';
import {store} from './store';
import {Picker} from './picker';

function App() {
    return (
        <Provider store={store}>
            <Picker />
        </Provider>
    );
}

export {App};
