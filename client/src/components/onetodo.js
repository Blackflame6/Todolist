import React, { Fragment, useState } from "react";

const OneTodo = ({ todos, oneTodo, setOneTodo, showOne }) => {
  const goBack = () => {
    setOneTodo(false);
  };
  console.log(showOne)
  return (
    <>

      <div class="card text-center my-5 " >
        <div class="card-header">Todo</div>

        <div class="card-body">
          <p class="card-text">{showOne.description}</p>
          <div className="buttons"></div>
          <button className="btn btn-warning text-center" onClick={goBack}>
            Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default OneTodo;
