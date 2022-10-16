import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                const { payload } = action;

                state.todos.push(payload);
            },
            prepare: (todo) => {
                const id = nanoid();

                const payload = {
                    ...todo,
                    id,
                    isCompleted: false,
                };

                return { payload };
            },
        },
    },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
