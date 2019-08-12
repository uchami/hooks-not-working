import React, {useEffect} from 'react';

export const Test = () => {
    useEffect(()=>{
        console.log("component did mount");
    } , [])
    return(<div>Hola!</div>);
}