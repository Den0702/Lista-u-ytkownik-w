/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import './App.css';
import UsersList from './components/usersList';
import UserForm from './components/userForm';
import { nanoid } from "nanoid";

class App extends Component {
    
    // binding needed when this.changeValue is a ES5 method
    // this.changeValue = this.changeValue.bind(this);
    constructor(props) {
        super(props);
    }
    
    addUserName() {
    }
    
    addUser() {
        console.log("addUser()");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h4>Lista użytkowników</h4>
                </header>
                <UserForm addUserName={this.addUser} />
                <UsersList />
            </div>
        );
    }
}

export default App;
