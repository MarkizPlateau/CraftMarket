import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

import * as ROUTES from '../../constants/routes';

const Navigation = () =>{
    return (
        <div>
            <AuthUserContext.Consumer>
                {
                    (state) => {
                        // if (state.loading) {
                        //     // show loader
                        // }
                        if (state.authUser && state.user && state.user.isAdmin) {
                            return <NaviagtionAdmin />
                        } else if(state.authUser) {
                            return <NavigationAuth />
                        } else {
                            return <NavigationNonAuth/>
                        }
                    }
                }
            </AuthUserContext.Consumer>
        </div>
    );
}

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.FAVORITES}>Favorites</Link>
        </li>
        <li>
            <Link to={ROUTES.ADD_NEW}>Add new</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NaviagtionAdmin = () => (
    <ul>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.FAVORITES}>Favorites</Link>
        </li>
        <li>
            <Link to={ROUTES.ADD_NEW}>Add new</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;