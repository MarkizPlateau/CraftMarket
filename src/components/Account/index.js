import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import WebsiteGraphic from "../WebsiteGraphic";

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {
            (state) => {
                if (state.authUser) {
                    return (
                        <section className={"account_section"}>
                            <h3><span>Account: </span> {state.authUser.email} </h3>
                            <div className={"account_forms_container"}>
                                <PasswordChangeForm />
                                <PasswordForgetForm />
                                <WebsiteGraphic/>
                            </div>
                        </section>
                    )
                }
            }

        }
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);