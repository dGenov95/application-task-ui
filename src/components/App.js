import React from 'react';
import AppRouter from './router/AppRouter';
import Header from './header/Header';
import Footer from './footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <AppRouter />
            <Footer authorName={'Dimitar Genov'} year={2019}/>
        </div>
    )
};

export default App;