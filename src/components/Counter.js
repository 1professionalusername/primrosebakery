import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const clickHandler = (event) => {
    const userInput = event.target.innerHTML;
    if (userInput === "-" && counter > 0) {
      setCounter(counter - 1);
    } else if (userInput === "+" && counter < 10) {
      setCounter(counter + 1);
    } else if (counter >= 10) {
      alert(
        "For quantities greater than 10, please email damali@primrosedesserts"
      );
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="App">
      {/* <h1 className="heading">Quantity</h1> */}
      <button onClick={clickHandler} className="plus-minus-buttons">
        -
      </button>
      <output className="text-styling">{counter}</output>
      <button onClick={clickHandler} className="plus-minus-buttons">
        +
      </button>
    </div>
  );
}
