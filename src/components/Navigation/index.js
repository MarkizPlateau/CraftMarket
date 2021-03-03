import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

import * as ROUTES from '../../constants/routes';

const Navigation = () =>{
    return (
        <header className={"header"}>
            <h1 className={"logo"}> <i className={"fas fa-palette logo-palette"}></i> HandiCraftin Market</h1>
            <AuthUserContext.Consumer>
                {
                    (state) => {
                        // if (state.loading) {
                        //     // show loader
                        // }
                        if (state.authUser && state.user && state.user.isAdmin) {
                            return <NaviagtionAdmin  />
                        } else if(state.authUser) {
                            return <NavigationAuth />
                        } else {
                            return <NavigationNonAuth/>
                        }
                    }
                }
            </AuthUserContext.Consumer>
        </header>
    );
}

const NavigationAuth = () => (
    <ul className={"navigation"}>
        <li className={"menu-item"}>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className={"menu-item"}>
            <Link to={ROUTES.FAVORITES}>Favorites</Link>
        </li>
        <li className={"menu-item"}>
            <Link to={ROUTES.ADD_NEW}>Add new</Link>
        </li>
        <li className={"menu-item"}>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li className={"menu-item"}>
            <SignOutButton />
        </li>
    </ul>
);

const NaviagtionAdmin = () => (
    <ul className={"navigation"}>
        <li className={"menu-item"}>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className={"menu-item"}>
            <Link to={ROUTES.FAVORITES}>Favorites</Link>
        </li>
        <li className={"menu-item"}>
            <Link to={ROUTES.ADD_NEW}>Add new</Link>
        </li>
        <li className={"menu-item"}>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li className={"menu-item"}>
            <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li className={"menu-item"}>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul className={"navigation"}>
        <li className={"menu-item"}>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li className={"menu-item"}>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;