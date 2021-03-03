import React, { Component } from "react";
import {withAuthentication} from "../Session";

import * as ROUTES from "../../constants/routes";

const AddNew = () => {
    return (
        <>
            <h1>Add new</h1>
            <AddNewForm />
        </>
    )
}

    const INITIAL_STATE = {
        itemName: "",
        itemDescription: "",
        itemPrice: "",
        itemPicture: "",
        userAdres: ""
    }

class AddNewFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {

        const uid = this.props.props.user.uid;

        const {itemName, itemDescription, itemPrice, itemPicture, userAdres} = this.state;

        const itemData = {
            name: itemName,
            itemDescription: itemDescription,
            itemPrice: itemPrice + "zł",
            itemPicture: itemPicture,
            userAdres: userAdres,
        }
        const newItemKey = this.props.firebase.db.ref('users/' + uid).child('items').push().key;
        const updateItems = {};
        updateItems['/items' + newItemKey] = itemData;

        return this.props.firebase.db.ref('users/' + uid).update(updateItems);

        }



    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }


    render() {

        const {
            itemName,
            itemDescription,
            itemPrice,
            itemPicture,
            userAdres,
            error,
        } = this.state;

        const isInvalid =
            itemName === '' ||
            itemDescription === '' ||
            itemPrice === '' ||
            itemPicture === '' ||
            userAdres === ''
        ;

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="itemName"
                    value={itemName}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Podaj nazwę rękodzieła"
                />
                <input
                    name="itemDescription"
                    value={itemDescription}
                    onChange={this.onChange}
                    type="textarea"
                    placeholder="Opisz rękodzieło"
                />
                <input
                    name="itemPicture"
                    value={itemPicture}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Prześlij adres do zdjęcia"
                />
                <PictureInput/>
                <input
                    name="itemPrice"
                    value={itemPrice}
                    onChange={this.onChange}
                    type="number"
                    placeholder="Podaj cenę"
                /><p>zł</p>
                <input
                    name="userAdres"
                    value={userAdres}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Podaj email do kontaktu"
                />
                <button disabled={isInvalid} type="submit">
                    Prześlij swoją sztukę!
                </button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

class PictureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Wybrany plik - ${this.fileInput.current.files[0].name}`
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Prześlij zdjęcie zdjęcie z dysku:
                    <input type="file" ref={this.fileInput} />
                </label>
                <br />
                <button type="submit">Wyślij</button>
            </form>
        );
    }
}

const AddNewForm = withAuthentication(AddNewFormBase);


export default AddNew;
