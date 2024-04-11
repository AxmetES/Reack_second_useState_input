import {TodoTask} from "../types.ts";
import React from "react";

type Props = {
    item: TodoTask;
    onDoneClick: () => void;
    onDeleteClick: () => void;

};

export const TaskItem: React.FC<Props> = ({
                                              item,
                                              onDoneClick,
                                              onDeleteClick}) => {
    const  {completed, title } = item;
    const handleDoneClick = ()=> {
        onDoneClick();
    }
    const status = completed ? 'Completed' : 'Not yet';


    return (
        <li key={item.id}>
            <h3>{title}</h3>
            <div>Status: {status}</div>
            {!completed && <button onClick={handleDoneClick}>Mark as done.</button>}
            {completed && <button onClick={() => onDeleteClick()}>Delete task.</button>}

        </li>
    );
}