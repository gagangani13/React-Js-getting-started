import "./ExpenseItemcss.css"
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
function ExpenseItem(props){
    return(
    <div className='expense-item'>
        <ExpenseDate date={props.expenseDate}/> 
    <ExpenseDetails amount={props.expensePrice}  location={props.LocationOfExpenditure}   title={props.expenseName}/>    
    </div>     
    )
}
export default ExpenseItem;