import React, { useEffect, useState } from 'react';

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
}

function handleError(error) {
    console.error(error);
}

function HomePage() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        // fetch('/time').then((response) => response.json()).then((data) => setTime(data.time));
        const query = `
            query ($id: Int) {
            Media (id: $id, type: ANIME) {
                id
                episodes
                duration
                description
                genres
                averageScore
                tags {
                    id
                    name
                }
                bannerImage
                coverImage {
                    medium
                    color
                }
                startDate {
                    year
                    month
                    day
                }
                endDate {
                    year
                    month
                    day
                }
                title {
                    romaji
                    english
                    native
                }
            }
        }`;

        const variables = {
            id: 120
        };
        const url = 'https://graphql.anilist.co';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };
        
        fetch(url, options)
            .then(handleResponse)
            .then(handleData)
            .catch(handleError);
    }, []);

    return (
        <React.Fragment>
            <h2>Home</h2>
            <h1>{time}</h1>
        </React.Fragment>
    );
}

export default HomePage;
