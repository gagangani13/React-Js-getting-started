import { useState } from "react";
import ExpenseFilter from "./component/ExpenseFilter";
import ExpenseItem from "./component/ExpenseItem";
import NewExpense from "./component/NewExpense";

const App=()=>{
  var details=[
    {id:Math.random().toString(),expenseDate:new Date(2023,1,6), expenseName:'RE Bike', expensePrice:'30000', LocationOfExpenditure:'Tumkur'},
    {id:Math.random().toString(),expenseDate:new Date(2023,2,8), expenseName:'Helmet', expensePrice:'120', LocationOfExpenditure:'Tumkur'},
    {id:Math.random().toString(),expenseDate:new Date(2023,1,7), expenseName:'Gears', expensePrice:'1700', LocationOfExpenditure:'Bangalore'},
    {id:Math.random().toString(),expenseDate:new Date(2023,2,4), expenseName:'Alloy wheels', expensePrice:'3000', LocationOfExpenditure:'Mysore'}
  ]
  const[oldDetails,updateDetails]=useState(details)
  const addDataInApp=(fromNewExpenseSubmittedData)=>{
    //console.log(fromNewExpenseSubmittedData);
    updateDetails([...oldDetails,fromNewExpenseSubmittedData]) 
  }
  const[selectedYear,updateFilter]=useState('2022')
  const changeOptionInApp=(filteredYear)=>{
    updateFilter(filteredYear)
  }
  return(
    <div id='AppId'>
      <h1>EXPENSES</h1>
      <NewExpense on onAddToApp={addDataInApp}/>
      <ExpenseFilter selected={selectedYear} onChangeOption={changeOptionInApp}/>
      {oldDetails.map((item)=>{
        return <ExpenseItem 
        expenseDate={item.expenseDate} 
        expenseName={item.expenseName} 
        expensePrice={item.expensePrice} 
        LocationOfExpenditure={item.LocationOfExpenditure}
        expenseId={item.id}
        /> 
      })} 
    </div>
  )
}
export default App;