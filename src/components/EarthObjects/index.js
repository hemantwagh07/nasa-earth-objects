import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '../Table';

export default function EarthObjects() {
    const date = new Date();
    const today = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
    let [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=API_KEY')
            .then((response) => {
                setApiData(response.data.near_earth_objects[today])
            })
            .catch((err) => {
                console.error('Error while fetching data', err);
            })
    }, [])
    return (
        <div>
            <h1>Near Earth Objects</h1>
            <Table data={apiData} />
        </div>
    )
}
