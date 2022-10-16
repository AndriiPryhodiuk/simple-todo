import React from "react";
import { useSelector } from "react-redux";
import { TodoCard } from "../TodoCard/TodoCard";

export const TodoList = () => {
    const todos = useSelector((state) => state.todosReducer.todos);
    console.log(todos);

    const renderTodoCard = (todo) => {
        const { title, id, isCompleted, description } = todo;

        return (
            <TodoCard
                title={title}
                id={id}
                isCompleted={isCompleted}
                description={description}
            />
        );
    };

    return <div>{todos.map(renderTodoCard)}</div>;
};
