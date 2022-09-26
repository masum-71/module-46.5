

import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Todoes = (props) => {

    const [todoes, setTodoes] = useState([]);
    

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodoes(data))
    }, [])
    return (
        <div>
            {
                todoes.map(todo => <Todo todo={todo}
                key = {todo.id}
                ></Todo>)
            }
        </div>
    );
};

export default Todoes;