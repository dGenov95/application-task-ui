import React from 'react';
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
            <div className={props.className}>
                <header>
                    <h1 className='text-center'>Welcome!</h1>
                    <Nav links={appLinks}/>
                </header>
            </div>
        );
};

export default Header;