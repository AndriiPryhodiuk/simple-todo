import { Input } from "../Input/Input";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos";

export const Form = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        const {
            target: { value },
        } = event;

        setTitle(value);
    };

    const handleDescriptionChange = (event) => {
        const {
            target: { value },
        } = event;

        setDescription(value);
    };

    const addNewTodo = () => {
        dispatch(
            addTodo({
                title,
                description,
            })
        );
    };

    const handleClick = (event) => {
        if (!title) {
            return false;
        }

        addNewTodo();
        setTitle("");
        setDescription("");

        event.preventDefault();
    };

    return (
        <form>
            <Input
                label="Title"
                isRequired
                handleChange={handleTitleChange}
                controlledValue={title}
            />
            <Input
                label="Description"
                handleChange={handleDescriptionChange}
                controlledValue={description}
            />
            <button type="submit" onClick={handleClick}>
                Add Todo &nbsp;
            </button>
            <br />
            {description}
        </form>
    );
};
