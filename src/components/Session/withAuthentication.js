import React from 'react';

import AuthUserContext from './context';
import Firebase, { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
                user:null,
                // loading: true,
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    let thisRefrence = this;

                    if (authUser) {

                        this.props.firebase.users().on('value', snapshot => {
                            const usersObject = snapshot.val();

                            const usersList = Object.keys(usersObject).map(key => ({
                                ...usersObject[key],
                                uid: key,
                            }));

                            usersList.forEach(function(user) {
                                if (user.uid == authUser.uid) {
                                    thisRefrence.setState({
                                        user:user,
                                        authUser:authUser,
                                        // loading:false
                                    });
                                }

                                return null;
                            });
                        });

                    } else {
                        this.setState({
                            authUser: null,
                            user: null,
                        });
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state}>
                    <Component {...this.props} props={this.state}/>
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;