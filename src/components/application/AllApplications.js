import React, {Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getApplicationItems = (applications) => {
    return applications.map(a => {
        return <li key={a._id} className='list-group-item list-group-item-action'>
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
    }, [])

    return (
        <Fragment className={props.className}>
            <ul className='list-group'>
                {getApplicationItems(applications)}
            </ul>
        </Fragment>
    );
}

export default AllApplications;