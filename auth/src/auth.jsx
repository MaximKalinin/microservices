import {useCallback, useEffect, useState} from 'react';
import {state_manager} from './state-manager';

function Auth() {
    const [ice_cream, set_ice_cream] = useState('');
    const [auth, set_auth] = useState(false);

    useEffect(() => {
        const unsubscribe = state_manager.subscribe_ice_cream(set_ice_cream);

        return unsubscribe;
    });

    const on_auth_click = useCallback(() => {
        set_auth(old => !old);
    }, [set_auth]);

    return <>
            {!ice_cream && <div>Ice cream is not set. Would you like to write something above?</div>}
            <br />
            <button onClick={on_auth_click}>{auth ? 'Unauth' : 'Auth'}</button>
            <br />
            {auth && 'Authenticated!'}{auth && ice_cream && ` With ice-cream: ${ice_cream}`}
        </>;
}

export {Auth};
