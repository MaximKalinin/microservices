import {useEffect, useRef} from 'react';
import {mount, unmount} from 'ice-cream';

function IceCream({show}) {
    const ref = useRef();

    useEffect(() => {
        if(show)
        {
            mount(ref.current);

            return () => unmount(ref.current);
        }
    }, [show]);

    return <div ref={ref} />;
}

export {IceCream};
