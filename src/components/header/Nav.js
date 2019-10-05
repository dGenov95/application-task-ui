import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    
    const getLinkItems = () => {
        return props.links.map(link => {
            return <li key={link.id} className='nav-item active'><Link className='nav-link' to={link.href}>{link.name}</Link></li>
        });
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            < div className = 'navbar-collapse' >
                <ul className='navbar-nav mr-auto'>
                    <li key='home-id' className='nav-item active'><Link className='nav-link' to='/'>Home</Link></li>
                </ul>
                <ul className='navbar-nav ml-auto'>
                    {getLinkItems()}
                </ul>
            </div>
        </nav>
    );
};




export default Nav;