import "./counter-component.css";
import { useState } from "react";

const CounterComponent = (props) => {
  const [counterValue, setCounterValue] = useState(0);

  const onButtonClick = (value) => {
    setCounterValue(value);
  };

  return (
    <div className="counter-component">
      <button
        className="counter-component__button"
        onClick={() => onButtonClick(counterValue + 1)}
      >
        +
      </button>
      {counterValue != 0 &&
      (counterValue % 7 === 0 || counterValue.toString().match("7")) ? (
        <div className="counter-component__value">Boom!</div>
      ) : (
        <div className="counter-component__value">{counterValue}</div>
      )}
      <button
        className="counter-component__button"
        onClick={() => onButtonClick(counterValue - 1)}
      >
        -
      </button>
    </div>
  );
};

export default CounterComponent;
