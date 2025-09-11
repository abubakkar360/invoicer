import React from 'react'

export default function Tables({lists}) {
  return (
    <>
      <table width="100%" className=''>
        <thead className='bg-gray-100 p-1'>
          <tr>
            <td className='font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Amount</td>
          </tr>
        </thead>
        <tbody>
              
              {lists.map((list)=>(
            <tr>
                <React.Fragment key={list.id}>

                  <td>{list.description}</td>
                  <td>{list.quantity}</td>
                  <td>{list.price}</td>
                  <td>{list.amount}</td>
                </React.Fragment>
                
            </tr>
              ))}
        </tbody>
      </table>
    </>
  )
}
