import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function TableForm({
    description,setDescription,
    quantity,setQuantity,
    price,setPrice,
    amount,setAmount,
    lists,setLists
}){

  useEffect(()=>{
    const calculate = (amount)=>{
      
      
   return setAmount(quantity*price)
}
  calculate(amount);
  },[amount,price,quantity,setAmount]
    
    
  )
  
  const handleSubmit = (e)=>{
    e.preventDefault();

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
    console.log(lists)
    
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
      Add Item</button>
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
              <td>{amount}</td>
            </tr>
        </tbody>
        </React.Fragment>
      ))}
      </table>
    
    {/* {end of table item } */}
    </>
  )
}
