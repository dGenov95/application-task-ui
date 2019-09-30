import React from 'react';
import Application from '../applications/Application';
import { Route, Switch } from 'react-router';
import AllApplications from '../applications/AllApplications';
import ApplicationForm from '../applications/ApplicationForm';


           
const AppRouter = () => (
    <div>
        <Switch>
            <Route path="/all" component={AllApplications} />
            <Route path="/new" component={ApplicationForm} />
            <Route path="/:id" component={Application} />
        </Switch>
    </div>
);

export default AppRouter;