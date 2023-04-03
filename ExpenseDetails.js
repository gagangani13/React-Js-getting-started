import "./ExpenseItemcss.css"
function ExpenseDetails(props){
    const amount=props.amount
    const location=props.location
    const title=props.title
    return(
        [
            <div className="expense-item__description "><h2>{title}</h2></div>,
            <div className="expense-item__description"><h2>{location}</h2></div>,
            <div className='expense-item__price'><h2>{amount}</h2></div> 
        ]   
    )
}
export default ExpenseDetails