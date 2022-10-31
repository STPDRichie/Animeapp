import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPopular } from '../actions/homePage/actions';

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopular());
    }, [dispatch]);

    return (
        <React.Fragment>
            <h2>Home</h2>
        </React.Fragment>
    );
}

export default HomePage;
