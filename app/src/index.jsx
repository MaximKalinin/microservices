import ReactDOM from 'react-dom';
import {App} from './root';
import {init} from 'auth';
import state_manager from './state-manager';

init(state_manager);

ReactDOM.render(<App />, document.getElementById('root'));
