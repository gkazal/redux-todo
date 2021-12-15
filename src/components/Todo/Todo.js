import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>ToDo List</h4>
      <div>
        <input
          type="text"
          placeholder="write..."
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <button onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
          Add
        </button>
      </div>
      <div style={{ backgroundColor: "silver" }}>
        {list.map((elem) => {
          return (
            <div>
              <h5>{elem.data}</h5>
              <button onClick={() => dispatch(deleteTodo(elem.id))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
