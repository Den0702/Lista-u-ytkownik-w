import React, {Component} from 'react';
import './App.css';
import User from './components/User';
import Form from './components/Form';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users
        }

        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    
    addUser(name) {
        const newUser = { name: name, id: Date.now() }; 
        
        this.setState({
            users: [...this.state.users,  newUser]
        }) 
        
        //console.log("addUser():" + newUser.name + newUser.id);
    }

    deleteUser(id) {
        //console.log("Delete user with id: " + id);
        const remainingUsers = this.state.users.filter(user => user.id !== id);

        this.setState({
            users: remainingUsers
        })
            
    }
    
    render() {
        let usersList = this.state.users.map(user => 
            <User name={user.name} id={user.id} key={user.id} deleteUser={this.deleteUser}/>
        )
        
        return (
            <div className="App">
                <header className="App-header"><h4>Lista użytkowników</h4></header>
                
                <Form addUser={this.addUser} />

                <ul className="users-list">
                    {usersList}
                </ul>
            </div>
        );
    }
}

export default App;
