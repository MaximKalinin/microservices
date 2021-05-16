import {useEffect, useLayoutEffect, useRef} from 'react';
import {mount, unmount} from 'ice-cream';

function IceCream() {
    const ice_cream_ref = useRef();

    useEffect(() => {
        mount(ice_cream_ref.current);
    });

    useLayoutEffect(() => () => unmount(ice_cream_ref.current));

    return <div ref={ice_cream_ref} />;
}

export {IceCream};
