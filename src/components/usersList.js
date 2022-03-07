import React from 'react';

function UsersList(props) {


    return (
        <div className="users-list">
            <li>Heniu</li>
            <li>Hans</li>
            <li>Staś</li>
        </div>
    );
}

export default UsersList;

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

