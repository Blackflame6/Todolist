import React, { Fragment, useState } from "react";

const EditTodo = ({ todo, use }) => {
  const [description, setDescription] = useState([todo.description]);

  const updateTodo = async (id) => {
    const body = { description };
    try {
      const res = await fetch(`https://todolist-app-xb56.onrender.com/fstodos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  const changeTodo = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todo.id}`}
      >
        Edit
      </button>

      <div
        class="modal fade"
        id={`id${todo.id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content modal-box">
            <div class="modal-header ">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
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
            <textarea
              modal-box
              name=""
              id=""
              cols="20"
              rows="5"
              class=" modalinput"
              type="text"
              value={description}
              onChange={changeTodo}
            ></textarea>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => updateTodo(todo.id)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
