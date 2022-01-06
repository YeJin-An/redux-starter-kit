import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../modules/counter";

function Countercontainer() {
  const number = useSelector((state) => state.counter);
  const dispath = useDispatch();

  const onIncreate = () => {
    dispath(increase());
  };

  const onDecrease = () => {
    dispath(decrease());
  };

  return (
    <Counter number={number} onIncrease={onIncreate} onDecrease={onDecrease} />
  );
}

export default Countercontainer;
