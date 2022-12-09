import React, { Fragment } from "react";
// import axios from "axios"
// import NavBar from "./navbar"; 

const Input = ({ description, setDescription, hideTheTodos }) => {
  const url = "http://localhost:5700/fstodos/";

  const addInput = async () => {
    try {
      const body = { description };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };
  const changeInputValue = (e) => {
    setDescription(e.target.value);
  };
  const handleClick = () => {
    hideTheTodos()
    
  }
  return (
    <Fragment>
       {/* <NavBar /> */}
    <h1 className="header-note text-center my-4">
        React Fullstack MVP Oct. 2022
      </h1>
      <form className="form d-flex" onSubmit={addInput}>
      <button
          className="
      btn btn-primary hide"
      onClick={handleClick} >
          {" "}
          Hide 
        </button>
        
        <input
          type="text"
          className="form-control main-input"
          onChange={changeInputValue}
          value={description}
         
          required
          autoFocus
        />
      
        <button
          className="
      btn btn-primary submit"
        >
          {" "}
          Submit
        </button>
      </form>
      
    </Fragment>
  );
};

export default Input;
