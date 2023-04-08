import { useState } from "react";
import "./ExpenseForm.css"
//import "./ExpenseItemcss.css"
function ExpenseForm(props){ 
    const[oldTitle,newTitle]=useState("")
    const[oldAmount,newAmount]=useState("")
    const[oldLocation,newLocation]=useState("")
    const[oldDate,newDate]=useState("")
    const TitleUpdate=(e)=>{
        newTitle(e.target.value);
        //console.log(oldTitle);
    }
    const AmountUpdate=(e)=>{
        newAmount(e.target.value);
        // console.log(oldAmount);
    }
    const LocationUpdate=(e)=>{
        newLocation(e.target.value);
        //console.log(oldLocation);
    }
    const DateUpdate=(e)=>{
        newDate(e.target.value);
        //console.log(oldDate);
    }
    const submission=(e)=>{
        e.preventDefault()
        const expenseData=({expenseName:oldTitle,expenseDate:new Date(oldDate),LocationOfExpenditure:oldLocation,expensePrice: oldAmount,id: Math.random().toString()})
        //console.log(expenseData)
        props.onAddToNewExpense(expenseData)
        newAmount('')
        newDate('')
        newLocation('')
        newTitle('') 
    }
    
    return(
        <form className="new-expense__controls" onSubmit={submission}>
            {console.log('coming in expense form')}
            <div className="new-expense__control label">
                <label>Expense Title</label>
                <input type={"text"} value={oldTitle} onChange={TitleUpdate}/>
            </div>
            <div className="new-expense__control label">
                <label for="amount">Expense Amount</label>
                <input type={"number"} value={oldAmount} min="1" step="1" onChange={AmountUpdate}/>
            </div>
            <div className="new-expense__control label">
                <label>Expense Location</label>
                <input type={"text"} value={oldLocation} onChange={LocationUpdate}/>
            </div>
            <div className="new-expense__control label">
                <label>Expense Date</label>
                <input type={"date"} min="2022-08-01" max="2023-03-01" value={oldDate} onChange={DateUpdate}/>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button> 
                <button type='button' onClick={props.onEditingCancel} >Cancel</button>
            </div>
            
        </form>   
    )
}
export default ExpenseForm;