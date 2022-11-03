import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPopular } from '../actions/homePage/actions';

function HomePage() {
    const dispatch = useDispatch();

    const { popular } = useSelector((state) => state.homePage);

    useEffect(() => {
        dispatch(fetchPopular());
    }, [dispatch]);

    return (
        <div className="home-page">
            <h2>Home</h2>
            {popular && popular.entities && popular.entities.length > 0 && (
                <div className="popular-block">
                    <div className="popular__count">{popular.count}</div>
                    <div className="popular__entities">
                        {popular.entities.map((entity) => entity.title.english)}
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
