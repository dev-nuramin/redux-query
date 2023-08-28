import React, { useState } from "react";
import {
  useAddTodosMutation,
  useDeleteTodoMutation,
  useGetSingleTodoQuery,
  useGetTodosQuery,
} from "../api/apiSlice";

const Todos = () => {
  const { data: todos } = useGetTodosQuery();
  const [input, setInput] = useState("");
  const [addTodos] = useAddTodosMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const handleInputAdd = () => {
    addTodos(input);
    setInput("");
  };
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <ul className="list-group">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Add Item"
                    className="w-90"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button onClick={handleInputAdd}>Add</button>
                </div>
                <br />
                {todos &&
                  Array.from(
                    todos.map((item, index) => {
                      return (
                        <li className="list-group-item w-100" key={index}>
                          {item.name}
                          <button
                            onClick={() => deleteTodo(item.id)}
                            className="btn btn-danger"
                          >
                            x
                          </button>
                        </li>
                      );
                    })
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
