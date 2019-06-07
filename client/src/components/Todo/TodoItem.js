import React from "react";
import TodoItemActions from "./TodoItemAction";

const TodoItem = ({item, onSelect,onDelete}) =>
        <li style={{
            opacity: item.checked ? 0.5 : 1,
            backgroundColor: "red"
        }}>
        {item.text}
        <TodoItemActions onSelect={() => onSelect((item))} 
        onDelete={() => {}}/>
        </li>;

export default TodoItem;