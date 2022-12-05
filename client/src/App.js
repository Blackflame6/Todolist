import React, { Fragment, useState } from "react";
import "./App.css";
import Register from "./Register";
import Input from "./components/input";
import ShowTodo from "./components/showtodo";
import OneTodo from "./components/onetodo";
import HideTodos from "./components/hidetodos";

function App() {
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [showOne, setShowOne] = useState("na")
  const [oneTodo, setOneTodo] = useState(false);
  const [hidetodos, setHideTodos] = useState(false)

  const trueOneTodo = () => {
    setOneTodo(true);
  };

  const hideTheTodos = () => {
    setHideTodos(true)
  }
 if(hidetodos == false) {
  return (
    <>
      <Input description={description} setDescription={setDescription} hideTheTodos={hideTheTodos}/>
      <ShowTodo
        todos={todos}
        setTodos={setTodos}
        oneTodo={oneTodo}
        setOneTodo={setOneTodo}
        trueOneTodo={trueOneTodo}
        showOne={showOne}
        setShowOne={setShowOne}

      />
    </>
  // <main>
  //   <Register className="App" />

  // </main>
   
  );
 } else {
  return (
    <HideTodos  />

  )
 }
  
}

export default App;
