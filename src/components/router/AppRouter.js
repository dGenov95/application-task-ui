import React from 'react';
import Application from '../application/Application';
import { Route, Switch } from 'react-router';
import AllApplications from '../application/AllApplications';
import ApplicationForm from '../application/ApplicationForm';


           
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