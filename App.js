import { useState } from "react";
import ExpenseFilter from "./component/ExpenseFilter";
import ExpenseItem from "./component/ExpenseItem";
import NewExpense from "./component/NewExpense";

const App=()=>{
  const details=[
    {id:Math.random().toString(),expenseDate:new Date(2023,1,6), expenseName:'RE Bike', expensePrice:'30000', LocationOfExpenditure:'Tumkur'},
    {id:Math.random().toString(),expenseDate:new Date(2022,2,8), expenseName:'Helmet', expensePrice:'120', LocationOfExpenditure:'Tumkur'},
    {id:Math.random().toString(),expenseDate:new Date(2021,1,7), expenseName:'Gears', expensePrice:'1700', LocationOfExpenditure:'Bangalore'},
    {id:Math.random().toString(),expenseDate:new Date(2022,2,4), expenseName:'Alloy wheels', expensePrice:'3000', LocationOfExpenditure:'Mysore'}
  ]
  const[oldDetails,updateDetails]=useState(details)
  const addDataInApp=(fromNewExpenseSubmittedData)=>{
    updateDetails([fromNewExpenseSubmittedData, ...oldDetails])
    // updateDetails((oldDetails)=>{
    //   return [fromNewExpenseSubmittedData, ...oldDetails]
    // })//this also works
  }
  const[selectedYear,updateFilter]=useState(details)
  const changeOptionInApp=(filteredYear)=>{
    if(filteredYear==='None'){
      updateFilter(details)
    }else{
      updateFilter([...details].filter((item)=>{
        return item.expenseDate.getFullYear().toString()===filteredYear
     }))
    }  
  }
  let noExpense=<p>No Expenses Here</p>
  if(selectedYear.length===1){
    noExpense=<p>"Only single Expense here. Please add more..."</p>
  }
  const handleDelete=(id)=>{
    updateDetails(oldDetails.filter((item)=>{
      return item.id!==id
    }))   
  }
  function updateAmount(id){
    updateDetails(oldDetails.map((item)=>{
        if(item.id===id){
          item.expensePrice=100
        }
        return item
      }))
  }

  return(
    <div id='AppId'>
      <h1>EXPENSES</h1>
      <NewExpense on onAddToApp={addDataInApp}/>
      <ExpenseFilter selected={selectedYear} onChangeOption={changeOptionInApp}/>
      
      { selectedYear.map((item)=>{     
        return <ExpenseItem 
        handleDelete={handleDelete}
        updateAmount={updateAmount}
        expenseDate={item.expenseDate} 
        expenseName={item.expenseName} 
        expensePrice={item.expensePrice} 
        LocationOfExpenditure={item.LocationOfExpenditure}
        expenseId={item.id}
        /> 
      })} 
      {(selectedYear.length===0 || selectedYear.length===1) && noExpense}  
    </div>
  )
}
export default App;