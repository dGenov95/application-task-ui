import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';


const Header = (props) => {
        const appLinks = [{
                id: 1,
                name: 'All Applications',
                href: '/all',
            },
            {
                id: 2,
                name: 'New Application',
                href: '/new',
            },
        ];
        return (
            <div>
                <header>
                    <h1>Welcome!</h1>
                    <Nav links={appLinks}/>
                </header>
            </div>
        );
};

export default Header;