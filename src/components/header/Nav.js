import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    
    const getLinkItems = () => {
        return props.links.map(link => {
            return <li key={link.id}><Link to={link.href}>{link.name}</Link></li>
        });
    }
    return (
        <nav>
            <ul>
                {getLinkItems()}
            </ul>
        </nav>
    );
};




export default Nav;