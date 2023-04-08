import "./ExpenseItemcss.css"
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
const ExpenseItem=(props)=>{
    // function deletion(e){
    //     var locate=e.target.parentElement
    //     var head=document.getElementById('AppId')
    //     head.removeChild(locate)
    // } 
    return(  
    <div className='expense-item '>
        <ExpenseDate date={props.expenseDate}/> 
        <ExpenseDetails amount={props.expensePrice}  location={props.LocationOfExpenditure}   title={props.expenseName}/>   
        <button onClick={()=>{
            props.updateAmount(props.expenseId)
        }}>$100</button> 
        <button onClick={()=>{
            props.handleDelete(props.expenseId)
        }}>DELETE</button>
    </div>     
    )
}
export default ExpenseItem;

