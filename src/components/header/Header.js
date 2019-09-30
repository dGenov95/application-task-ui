import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

    const getLinkItems = () => {
        return props.links.map(link => {
            return <li key={link.id}><Link to={link.href}>{link.name}</Link></li>
        });
    }

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        {getLinkItems()}
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;