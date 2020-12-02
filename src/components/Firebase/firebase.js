import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAAqqzYBaZMj0ZX3Jqj7Ej16RgnV2rRuk",
    authDomain: "handicraftin-market.firebaseapp.com",
    databaseURL: "https://handicraftin-market.firebaseio.com",
    projectId: "handicraftin-market",
    storageBucket: "handicraftin-market.appspot.com",
    messagingSenderId: "574769306607",
};

class Firebase{
    constructor() {
        app.initializeApp(config);


        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;
