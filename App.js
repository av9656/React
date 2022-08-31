import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: "car Insurance", amount: 289.26, Date: new Date(2021, 2, 28) },
    { title: "car Insurance", amount: 289.26, Date: new Date(2021, 2, 28) },
    { title: "car Insurance", amount: 289.26, Date: new Date(2021, 2, 28) },
  ];

  return (
    <div className="App">
      Let's get started!<hr />
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} Date={expense[0].Date}></ExpenseItem><hr />
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} Date={expense[1].Date}></ExpenseItem><hr />
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} Date={expense[2].Date}></ExpenseItem><hr />
    </div>
  );
}

export default App;
