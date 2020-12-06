import React, {Component} from "react";

import { withAuthorization } from '../Session';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }
    render() {
        const users = this.state;

        return (
            <div>
                <h1>Home Page</h1>
                <h2> Hello {users.username}</h2>
                <p>The Home Page is accessible by every signed in user.</p>
            </div>
        )
    }
}


// const HomePage = () => (
//     <div>
//         <h1>Home Page</h1>
//         <p>The Home Page is accessible by every signed in user.</p>
//     </div>
// );
//
const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);