import {useCallback, useState} from 'react';
import {IceCream} from './ice-cream';
import {Auth} from './auth';

function App() {
    const [picking, set_picking] = useState(false);
    const [authing, set_authing] = useState(false);

    const on_click_start = useCallback(() => set_picking(old => !old), [set_picking]);
    const on_click_auth = useCallback(() => set_authing(old => !old), [set_authing]);
    
    return (
        <>
            This is the main app.<br />
            To start picking ice-cream, click the button -&gt; <button onClick={on_click_start}>start</button><br />
            To open auth button, click the button -&gt; <button onClick={on_click_auth}>open</button> 
            <IceCream show={picking} />
            <Auth show={authing} />
        </>
    );
}

export {App};
