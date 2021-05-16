import { useCallback, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {save_ice_cream} from './store';

function Picker() {
    const [name, set_name] = useState('');
    const saved_name = useSelector(store => store.ice_cream);

    const on_name_change = useCallback(event => set_name(event.target.value), []);
    const on_save_click = useCallback(() => dispatch(save_ice_cream(name)), [dispatch, name]);
    const dispatch = useDispatch();

    return (
        <div>
            Hello! This is ice-cream package. Please, provide your favourite ice-cream:<br />
            <label>
                <input value={name} onChange={on_name_change} />
                <button onClick={on_save_click}>Save</button>
            </label><br />
            (Saved: {saved_name})
        </div>
    );
}

export {Picker};
