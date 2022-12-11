import React, { Fragment, useState, useEffect } from "react";
import DeleteTodo from "./deletetodo";
import EditTodo from "./editTodo";
import OneTodo from "./onetodo";

const ShowTodo = ({
  todos,
  setTodos,
  description,
  setDescription,
  oneTodo,
  setOneTodo,
  trueOneTodo,
  showOne,
  setShowOne
}) => {
  useEffect(() => {
    const displayTodos = async () => {
      // const url = "http://localhost:5700/fstodos/";
      const url = "https://todolist-app-xb56.onrender.com/fstodos";
      try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setTodos(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    displayTodos();
  }, []);

  const changeOneState = async(id) => {
    try {
      const res = await fetch (`http://localhost:5700/fstodos/${id}`)
      trueOneTodo();
      const data = await res.json()
      const getOne = data[0]
      console.log(getOne)
      setShowOne(getOne)
    } catch (err) {
      console.err(err.message)
      
    }

 
  };

  if (oneTodo == false) {

    return todos.map((todo) => (
      <div
        oneTodo={oneTodo}
        setOneTodo={setOneTodo}
    
        class="card text-center my-5 "
        id={todo.id}
        key={todo.id}
      >
        <div class="card-header" onClick={() =>changeOneState(todo.id)}>Todo Description</div>

        <div class="card-body"  onClick={() =>changeOneState(todo.id)}>
          <p class="card-text">{todo.description}</p>
        </div>
          <div className="buttons">
            <EditTodo className="edit" todo={todo} />
            <DeleteTodo todo={todo} todos={todos} setTodos={setTodos} />
          </div>
      </div>
    ));
    
  }
   else {
    return (

      <OneTodo showOne={showOne} oneTodo={oneTodo} setOneTodo={setOneTodo} todos={todos}/>
    )
  }
};

export default ShowTodo;
