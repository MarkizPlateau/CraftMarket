import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {
            (state) => {
                if (state.authUser) {
                    return (
                        <div>
                            <h1> Account: {state.authUser.email} </h1>
                            <PasswordForgetForm />
                            <PasswordChangeForm />
                        </div>
                    )
                }
            }

        }
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);