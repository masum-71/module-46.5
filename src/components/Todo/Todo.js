import React from 'react';

const Todo = (props) => {
   
    const {id, title, completed} = props.todo;
    
        return (
        <div>
            <h3>{id}</h3>
            <p>{title}</p>
            <p>{completed}</p>
        </div>
    );
};

export default Todo;