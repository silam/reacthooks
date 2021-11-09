import React, {useEffect} from 'react';

function Child( {returnComment}) {

    
    useEffect(()=> {
        console.log("Func was called");
    }, [returnComment]);

    return <div>{returnComment("Silam")}</div>
}

export default Child;