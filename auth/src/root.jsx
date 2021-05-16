import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {store} from './store';
import {Auth} from './auth';

function App() {
    return (
        <Provider store={store}>
            <div>This is auth package</div><br />
            <Auth />
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
