import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, reset } from "../actions/index";

const Counter = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <br />
      <br />
      <br />
      <div className="container">
        <button onClick={() => dispatch(decNumber())} className="btn">
          -
        </button>
        <input className="inputCounter" type="text" value={myState} />
        <button onClick={() => dispatch(incNumber())} className="btn">
          +
        </button>
      </div>
      <br />
      <button onClick={() => dispatch(reset())} className="btn">
        R
      </button>
    </div>
  );
};

export default Counter;
