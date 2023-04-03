import ExpenseItem from "./component/ExpenseItem";
function App(){
  const details=[
    {expenseDate:new Date(2023,1,6), expenseName:'RE Bike', expensePrice:300000, LocationOfExpenditure:'Tumkur'},
    {expenseDate:new Date(2023,2,8), expenseName:'Helmet', expensePrice:1000, LocationOfExpenditure:'Tumkur'},
    {expenseDate:new Date(2023,1,7), expenseName:'Gears', expensePrice:17000, LocationOfExpenditure:'Bangalore'},
    {expenseDate:new Date(2023,2,4), expenseName:'Alloy wheels', expensePrice:30000, LocationOfExpenditure:'Mysore'}
  ]
  return(
    <div>
      <h1>Expenses</h1>
      {details.map((item)=>{
        return <ExpenseItem expenseDate={item.expenseDate.toISOString()} expenseName={item.expenseName} expensePrice={item.expensePrice} LocationOfExpenditure={item.LocationOfExpenditure}></ExpenseItem>  
      })}
    </div>
  )
}
export default App;