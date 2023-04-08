import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css"
const NewExpense=(props)=>{
    const addDataInNewExpense=(fromExpenseFormSubmissionData)=>{
        //console.log(fromExpenseFormSubmission);
        props.onAddToApp(fromExpenseFormSubmissionData)
        setEditing(false)
    }
    const[editing,setEditing]=useState(false)
    const editingExpense=()=>{
        setEditing(true)
    }
    const editingCancel=()=>{
        setEditing(false)
    }
    return(
        <div className="new-expense">
            {!editing && <button className="new-expense button" onClick={editingExpense}>ADD NEW EXPENSE</button>}
            {editing && <ExpenseForm onAddToNewExpense={addDataInNewExpense} onEditingCancel={editingCancel} />}
        </div>
    )
}
export default NewExpense