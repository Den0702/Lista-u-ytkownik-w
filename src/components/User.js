import React from 'react';

function User(props) {

    return (
        <li>
            {props.name}
            <span onClick={() => props.deleteUser(props.id)}>X</span>
        </li>    
    );
}

export default User;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;

