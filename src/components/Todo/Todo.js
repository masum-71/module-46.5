import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <h3>{props.id}</h3>
            <p>{props.title}</p>
            <p>{props.completed}</p>
        </div>
    );
};

export default Todo;