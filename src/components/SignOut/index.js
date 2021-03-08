import React from 'react';

import { withFirebase } from '../Firebase';
import * as ROUTES from "../../constants/routes";
import {Link} from "react-router-dom";

const SignOutButton = ({ firebase }) => (
    <button className={"signout_button"} type="button" onClick={firebase.doSignOut}>
        <Link to={ROUTES.LANDING}>Sign Out</Link>
    </button>
);

export default withFirebase(SignOutButton);