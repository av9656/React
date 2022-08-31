

function Expenses(){
    return(
    <ExpenseItem title={expense[0].title} amount={expense[0].amount} Date={expense[0].Date}></ExpenseItem>
    <ExpenseItem title={expense[1].title} amount={expense[1].amount} Date={expense[1].Date}></ExpenseItem>
    <ExpenseItem title={expense[2].title} amount={expense[2].amount} Date={expense[2].Date}></ExpenseItem>
    
    );
}
export default Expenses;