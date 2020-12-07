import React from 'react';
import { withAuthentication } from '../Session';

const Home = ({props}) => {
    console.log("props:", props.user)

    return (
        <>
            <h1> Hey </h1>
        </>
    )
};

// {({theme, toggleTheme}) => (
//     <button
//         onClick={toggleTheme}
//         style={{backgroundColor: theme.background}}>
//         Przełącz motyw
//
export default withAuthentication(Home);


