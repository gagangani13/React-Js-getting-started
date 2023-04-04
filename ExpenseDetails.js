import "./ExpenseItemcss.css"
import React,{useState} from "react"
const ExpenseDetails=(props)=>{
    //const amount=props.amount //commented bcz of useState
    const location=props.location
    const title=props.title
    const[amount,newprice]=useState(props.amount)
    function update(){
        newprice(100);
    }
    return(
        [
            <div className="expense-item__description "><h2>{title}</h2></div>,
            <div className="expense-item__description"><h2>{location}</h2></div>,
            <div className='expense-item__price'><h2>${amount}</h2></div> ,
            <button onClick={update}>$100</button>
        ]   
    )
}
export default ExpenseDetails