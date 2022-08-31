//import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

function ExpenseItem(props) {
  const month = props.Date.toLocaleString("en-US", { month: "long" });
  const day = props.Date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.Date.getFullYear();

  const [title, setTitle] = useState(props.title);

  const clickhandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
      {/* <ExpenseDate date={props.date}></ExpenseDate> */}

      <div>
        <div>{title}</div>
        <div>{props.amount}</div>
      </div>
      <div>
        <button onClick={clickhandler}>Click Me</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
