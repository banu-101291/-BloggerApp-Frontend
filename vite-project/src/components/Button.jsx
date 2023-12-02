import React from 'react'


function Button({ onClick, label }) {
    return (
        <button onClick={onClick} style={{ padding: '10px', margin: '5',width:'30',height:'30' }}>
            {label}
        </button>

    );
}


export default Button;