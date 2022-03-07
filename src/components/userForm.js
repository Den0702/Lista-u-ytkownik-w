import React from 'react';

function UserForm(props) {
    
    function handleSubmit(event) {
        event.preventDefault();
        props.addUser();
    }
    
    return (
        <form onSubmit={handleSubmit} className="user-form">
            <input
                type="text"
                placeholder="Enter name"
                id="new-user"
            /><br/>
            <button type="submit">Dodaj użytkownika</button>
        </form>
    );
}

export default UserForm;