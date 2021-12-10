import React, {useEffect, useState} from "react";
const HelloApiClient = () => {
    // declare local state variable and mutator
    const [hello, setHello] = useState('');

    // when the component first loads
    useEffect(() => {
        fetch('http://localhost:4000/hello')
            .then(response => response.text())
            .then(text => setHello(text));
    }, []);
    
    return (
        <h1>{hello}</h1>
    );
};
export default HelloApiClient;

