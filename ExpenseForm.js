import "./ExpenseForm.css"
function ExpenseForm(){ 
    const show=(e)=>{
        console.log(e.target.value);
    }
    return(
        <form className="new-expense__controls">
            <div className="new-expense__control label">
                <label>Expense Title</label>
                <input type={"text"} onChange={show}/>
            </div>
            <div className="new-expense__control label">
                <label for="amount">Expense Amount</label>
                <input type={"number"} min="1" step="1" onChange={show}/>
            </div>
            <div className="new-expense__control label">
                <label>Expense Location</label>
                <input type={"text"} onChange={show}/>
            </div>
            <div className="new-expense__control label">
                <label>Expense Date</label>
                <input type={"date"} min="2022-08-01" max="2023-03-01" onChange={show}/>
            </div>
            <button type="submit" className="new-expense__actions" >Add Expense</button>
        </form>   
    )
}
export default ExpenseForm;