import "./ExpenseItemcss.css"
function ExpenseItem(props){
    return(
        <div className="expense-item">
            <div>{props.expenseDate}</div><div className="expense-item__description"><h2>{props.expenseName}</h2></div><div className="expense-item__description"><h2>{props.LocationOfExpenditure}</h2></div><div className="expense-item__price">Rs.{props.expensePrice}</div>
        </div>
    )
}
export default ExpenseItem;