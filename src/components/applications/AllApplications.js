import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getApplicationItems = (applications) => {
    return applications.map(a => {
        return <li key={a._id}>
            <Link to={{ pathname: '/' + a._id }}>{`${a._id} - ${a.name}`}</Link>
        </li>
    });             
}

const AllApplications = (props) => {
    const [applications, setApplications] = useState([]);

    async function fetchApplications() {
        await fetch('http://localhost:8000/applications')
            .then(res => res.json())
            .then(res => setApplications(res),
                (err => console.log(err)));
    }

    useEffect(() => {
         fetchApplications();
    },[])

    return (
        <div>
            <ul>
                {getApplicationItems(applications)}
            </ul>
        </div>
    );
}

export default AllApplications;