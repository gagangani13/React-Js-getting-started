const ExpenseFilter=(props)=>{
    const choose=(e)=>{
        props.onChangeOption(e.target.value)
    }
    return(
        <div>
            <label>Filter by year</label>
            <select onChange={choose}>
                <option value="None">None</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    )
}
export default ExpenseFilter;