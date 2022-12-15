import React, { Fragment, useEffect } from "react";

const DeleteTodo = ({ todo, todos, setTodos }) => {
  const dropTodo = async (id) => {
    await fetch(`https://todolist-app-xb56.onrender.com/fstodos/${id}`, {
    // await fetch(`http://localhost:5700/fstodos/${id}`, {
      method: "DELETE",
    });
    // setTodos(todos.filter((todo) => todo.id != id));
    window.location = "/"
    
  };
  
  return (
    //   <button onClick={()=>dropTodo(todo.id)} class="btn btn-danger">
    //   Delete
    //  </button>
    <>
      <button
        type="button"
        class="btn btn-danger"
        data-toggle="modal"
        data-target={`#key${todo.id}`}
      >
       Delete
      </button>

      <div
        class="modal fade"
        id={`key${todo.id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Are you sure you want to delete this todo?
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">{todo.description}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Go back
              </button>
              <button type="button" class="btn btn-danger" onClick={() => {dropTodo(todo.id)}}>
               
               Yes, delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteTodo;
