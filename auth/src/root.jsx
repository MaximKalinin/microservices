import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {store} from './store';

function App() {
    return (
        <Provider store={store}>
            This is auth package!
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
