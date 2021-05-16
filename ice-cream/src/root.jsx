import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {store} from './store';
import {Picker} from './picker';

function App() {
    return (
        <Provider store={store}>
            <Picker />
        </Provider>
    );
}

function mount(element) {
    ReactDOM.render(<App />, element);
}

function unmount(element) {
    ReactDOM.unmountComponentAtNode(element);
}

export {mount, unmount};
