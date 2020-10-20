import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Dashboard from './home/dashboard/Dashboard';
import Login from './login/Login';
import Project from './home/project/Project';
import Settings from './home/settings/Settings';
import Groups from './home/groups/Groups';
import Users from './home/users/Users';

function router() {
    return (
        <Router>
            <Switch>
                <Redirect exact to="/login" from='/' />
                <Route path="/login" component={Login} />
                <Route path="/home" render={() =>
                    <Home>
                        <Redirect exact to="/home/dashboard" from='/home' />
                        <Route path="/home/dashboard" component={Dashboard} />
                        <Route path="/home/project" component={Project} />
                        <Route path="/home/groups" component={Groups} />
                        <Route path="/home/users" component={Users} />
                        <Route path="/home/settings" component={Settings} />
                    </Home>
                } />
            </Switch>
        </Router>
    )
}

export default router