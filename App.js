import ExpenseItem from "./component/ExpenseItem";
import NewExpense from "./component/NewExpense";

const App=()=>{
  const details=[
    {id:1,expenseDate:new Date(2023,1,6), expenseName:'RE Bike', expensePrice:30000, LocationOfExpenditure:'Tumkur'},
    {id:2,expenseDate:new Date(2023,2,8), expenseName:'Helmet', expensePrice:120, LocationOfExpenditure:'Tumkur'},
    {id:3,expenseDate:new Date(2023,1,7), expenseName:'Gears', expensePrice:1700, LocationOfExpenditure:'Bangalore'},
    {id:4,expenseDate:new Date(2023,2,4), expenseName:'Alloy wheels', expensePrice:3000, LocationOfExpenditure:'Mysore'}
  ]
  return(
    <div id='AppId'>
      <h1>EXPENSES</h1>
      <NewExpense/>
      {details.map((item)=>{
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