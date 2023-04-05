import { useState } from "react";
import "./ExpenseForm.css"
import "./ExpenseItemcss.css"
function ExpenseForm(){ 
    const[oldTitle,newTitle]=useState(" ")
    const[oldAmount,newAmount]=useState(" ")
    const[oldLocation,newLocation]=useState(" ")
    const[oldDate,newDate]=useState(" ")
    const TitleUpdate=(e)=>{
        newTitle(e.target.value);
        //console.log(oldTitle);
    }
    const AmountUpdate=(e)=>{
        newAmount(e.target.value);
        //console.log(oldAmount);
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
        e.prevent.default()
        console.log({
            title:oldTitle,
            date:oldDate,
            location:oldLocation,
            price: oldAmount
        })
    }
    
    return(
        <form className="new-expense__controls" onSubmit={submission}>
            <div className="new-expense__control label">
                <label>Expense Title</label>
                <input type={"text"} onChange={TitleUpdate}/>
            </div>
            <div className="new-expense__control label">
                <label for="amount">Expense Amount</label>
                <input type={"number"} min="1" step="1" onChange={AmountUpdate}/>
            </div>
            <div className="new-expense__control label">
                <label>Expense Location</label>
                <input type={"text"} onChange={LocationUpdate}/>
            </div>
            <div className="new-expense__control label">
                <label>Expense Date</label>
                <input type={"date"} min="2022-08-01" max="2023-03-01" onChange={DateUpdate}/>
            </div>
            <button type="submit" className="new-expense__actions">Add Expense</button>
        </form>   
    )
}
export default ExpenseForm;