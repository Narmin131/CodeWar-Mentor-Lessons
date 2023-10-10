import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myDecrementFunction, myIncrementFunction, myResetFunction } from "./redux/Actions";
const App = () => {
  // redux, redux-toolkit, react-redux

  let counter = useSelector((store) => store.CounterReducer);
  console.log(counter);

  const dispatch = useDispatch();

  return (
    <>
      <div>Counter</div>
      <span>{counter}</span>
      <button onClick={() => dispatch(myIncrementFunction())}>+</button>
      <button onClick={() => dispatch(myDecrementFunction())}>-</button>
      <button onClick={() => dispatch(myResetFunction())}>reset</button>
    </>
  );
};

export default App;
