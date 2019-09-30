import React from 'react';
import AppRouter from './router/AppRouter';
import Header from './header/Header';

const App = () => {

    const appLinks = [
        {
            id: 1,
            name: 'All Applications',
            href: '/all',
        },
        {
            id:2,
            name: 'New Application',
            href: '/new',
        },
    ];
    return (
        <div>
            <Header links={appLinks}/>
            <AppRouter />
        </div>
    )
};

export default App;