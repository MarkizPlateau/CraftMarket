import React, { Component } from 'react';
import { withAuthentication } from '../Session';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
            usersItems: [],
            username: ''
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        this.props.firebase.db.ref('users').on('value', (snapshot) => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            this.setState({
                users: usersList,
                // username:this.props.props.user.username,
                loading: false,
            });
            const userattributes = usersList.map(val => Object.entries(val)
                .filter((key, val) => /items/.test(key))
                .map(el => el[1])
            );
            let usersitems = [];
            userattributes.forEach(el => {
                return usersitems.push(...el)
            })
            this.setState({
                usersItems: usersitems
            })
        })
    }
    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render(){
        const { users, loading, username, usersItems, userAdres } = this.state;
        return (
            <>
                {/*<h1> Hey {username}</h1>*/}

                {loading && <div>Loading ...</div>}

                <UserItems usersItems={usersItems} />
            </>
        )
    }
}

const UserItems = ({ usersItems }) => (
        <section className={"home_section"}>
            {usersItems.map((item,index) => (
                <article className={"user_item"} key={index}>
                    <h1 className={"user_item_name"}>{item.name}</h1>
                    <img className={"user_item_picture"} src={item.itemPicture} width={400} />
                    <p className={"user_item_description"}>{item.itemDescription}{/*.slice(0,20)}{"..."}*/}</p>
                    {/*<p className={"hover_description"}>look here for more</p>*/}
                    <p className={"user_item_price"}>{item.itemPrice}</p>
                    <p className={"user_adres"}>{item.userAdres}</p>
                </article>
                ))}
        </section>
);

//     <ul>
//         {users.map(user => (
//             <li key={user.uid}>
//         <span>
//           <strong>ID:</strong> {user.uid}
//         </span>
//                 <span>
//           <strong>E-Mail:</strong> {user.email}
//         </span>
//                 <span>
//           <strong>Username:</strong> {user.username}
//         </span>
//             </li>
//         ))}
//     </ul>
// );


export default withAuthentication(Home);



