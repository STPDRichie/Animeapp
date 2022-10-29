import React, { useEffect, useState } from 'react';

function Home() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        fetch('/time').then((response) => response.json()).then((data) => setTime(data.time));
    }, []);

    return (
        <React.Fragment>
            <h2>Home</h2>
            <h1>{time}</h1>
        </React.Fragment>
    );
}

export default Home;
