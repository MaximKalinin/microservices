import {useCallback, useState} from 'react';
import {IceCream} from './ice-cream';

function App() {
    const [picking, set_picking] = useState(false);

    const on_click = useCallback(() => set_picking(old => !old), [set_picking]);
    
    return (
        <div>
            This is the main app.<br />
            To start picking ice-cream, click the button -&gt; <button onClick={on_click}>start</button> 
            {picking && <IceCream />}
        </div>
    );
}

export {App};
