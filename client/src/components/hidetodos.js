import { Fragment } from "react";
const HideTodos = () => {
  return (
    <Fragment>
      <h1 className="header-note text-center my-4">
        React FULLSTACK MVP PROJECT
      </h1>
      <form className="form d-flex">
        <button
          className="
      btn btn-primary hide"
       >
          {" "}
          Show 
        </button>



       
      </form>
    </Fragment>
  );
};

export default HideTodos;
