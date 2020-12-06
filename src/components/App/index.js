import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Favorites from "../Favorites";
import AddNew from "../New";
import NotFound from "../NotFound/NotFound";

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <Switch>
            <div>
                <Navigation />

                <hr />

                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
                />
                <Route path={ROUTES.HOME} component={HomePage} />
                <Route path={ROUTES.FAVORITES} component={Favorites} />
                <Route path={ROUTES.ADD_NEW} component={AddNew} />
                <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route path={ROUTES.ADMIN} component={AdminPage} />
                {/*<Route component={NotFound} />*/}
            </div>
        </Switch>
    </Router>
);

export default withAuthentication(App);