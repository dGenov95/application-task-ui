import React from 'react';
import AppRouter from './router/AppRouter';
import Header from './header/Header';
import Footer from './footer/Footer';

const App = () => {
    return (
        <div className='container'>
            <div className='row mb-4'>
                <Header className='col-lg-12'/>
            </div>
            <div className='row'>
                <AppRouter className='col-lg-12'/>
            </div>
            <div className='row mt-4'>
                <Footer className='col-lg-12' authorName={'Dimitar Genov'} year={2019}/>
            </div>
        </div>
    )
};

export default App;