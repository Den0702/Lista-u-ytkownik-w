import React from 'react';

function Form(props) {
    
    function handleSubmit(event) {
        event.preventDefault();
        let input = document.querySelector('input');
        let name = input.value;
        props.addUser(name);
    }
    
    return (
        <form onSubmit={handleSubmit} className="user-form">
            <input
                type="text"
                placeholder="Enter name"
            /><br/>
            <button type="submit">Dodaj użytkownika</button>
        </form>
    );
}

export default Form;