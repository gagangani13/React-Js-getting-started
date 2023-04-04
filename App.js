import ExpenseItem from "./component/ExpenseItem";
const App=()=>{
  const details=[
    {id:1,expenseDate:new Date(2023,1,6), expenseName:'RE Bike', expensePrice:300000, LocationOfExpenditure:'Tumkur'},
    {id:2,expenseDate:new Date(2023,2,8), expenseName:'Helmet', expensePrice:1000, LocationOfExpenditure:'Tumkur'},
    {id:3,expenseDate:new Date(2023,1,7), expenseName:'Gears', expensePrice:17000, LocationOfExpenditure:'Bangalore'},
    {id:4,expenseDate:new Date(2023,2,4), expenseName:'Alloy wheels', expensePrice:30000, LocationOfExpenditure:'Mysore'}
  ]
  return(
    <div id='AppId'>
      <h1>Expenses</h1>
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