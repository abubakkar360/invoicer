import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
export default function TableForm({
    description,setDescription,
    quantity,setQuantity,
    price,setPrice,
    amount,setAmount,
    lists,setLists,
    isEditing,setIsEditing,
    total,setTotal
}){

  // {calculate amount function }

  useEffect(()=>{
    const calculate = (amount)=>{
      
      
   return setAmount(quantity*price)
}
  calculate(amount);
  },[amount,price,quantity,setAmount]
    
    
  )
  // {submit function }
  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!description||!quantity||!price){
      alert('Please fill all the gap');
    }else{
      const newItems = {
      id:uuidv4(),
      description,
      quantity,
      price,
      amount
    }
    setDescription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setLists([...lists,newItems])
    setIsEditing(false)
    // console.log(lists)
    }
    
  }

  // calculate total amount in table 
  useEffect(()=>{
    
  let rows = document.querySelectorAll('.amount');
  
  
  let sum = 0;

  for(let i = 0; i < rows.length; i++){
   
    if(rows[i].className === 'amount'){
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
      console.log(sum);
      
      
      setTotal(sum);
    }
  }
  })
    
    // Edit function

    const editRow = (id)=>{
      const editingRow = lists.find((row)=>row.id===id);
      setLists(lists.filter((row)=>row.id !== id))
      setIsEditing(true);
      setDescription(editingRow.description);
      setQuantity(editingRow.quantity);
      setPrice(editingRow.price);
    }
    
    // delete function
    
    const deleteRow = (id) =>{
      
        setLists(lists.filter((row)=>row.id !== id))
    }
  return (
    
    <>
    <form onSubmit={handleSubmit}>
      <article className='md:mt-16'>
        
      <div className='flex flex-col'>
        <label htmlFor="description">Description</label>
        <input 
        type="text" 
        name="description"
        id='description' 
        value={description}
        placeholder='Describe here'
        onChange={(e)=>setDescription(e.target.value)}
        />
      </div>

        <div className='md:grid grid-cols-3 gap-10'>
            <div className='flex flex-col'>
                <label htmlFor="quantity">Quantity</label>
                <input 
                type="number" 
                name="quantity" 
                id='quantity'
                value={quantity}
                placeholder='Quantity'
                onChange={e=>setQuantity(e.target.value)}
                />
            </div>
                
            <div className='flex flex-col'>
                <label htmlFor="price">Price</label>
                <input 
                type="number" 
                name="price"
                id='price' 
                value={price} 
                placeholder='Price'
                onChange={e=>setPrice(e.target.value)}
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="amount">Amount</label>
                <p name="amount" className='gray-light'>{amount}</p>
            </div>
        </div>

    </article>
    <button type="submit" className='bg-blue-500 
    text-white 
    font-bold 
    p-4 
    rounded 
    shadow
    border-2 
    mb-5 
    hover:bg-transparent 
    hover:text-blue-500 
    transition-all 
    duration-300'
    >
     {isEditing?'Edit Item':'Add Item'} </button>
    </form>
    {/* {table item } */}
    
    <table width="100%" className='mb-10'>
        <thead className='bg-gray-100 p-1 '>
          <tr>
            <td className='font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Amount</td>
          </tr>
        </thead>
      {lists.map(({id,description,quantity,price,amount})=>(
        <React.Fragment key={id}>
        <tbody>
            <tr>
              <td>{description}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td className='amount'>{amount}</td>
              <td> <button className='text-red-800' type="" onClick={()=>deleteRow(id)}><MdDeleteOutline /></button></td>
              <td> <button className='text-green-800' type="" onClick={()=>editRow(id)}><MdOutlineEdit /></button></td>
            </tr>
        </tbody>
        </React.Fragment>
      ))}
      </table>

      <div>        
        <h2 className=' flex justify-end font-bold text-4xl '>TK. {total.toLocaleString()}</h2>
      </div>
    {/* {end of table item } */}
    </>
  )
}
