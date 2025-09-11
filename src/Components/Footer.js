import React from 'react'

export default function Footer({name,email,phoneNumber,bank,bankAccountNumber,website}) {
  return (
    <>
      <footer className='footer border-t-2 border-gray-300 py-5'>
          <ul className="flex flex-wrap justify-center gap-2 ">
            <li><span className="font-bold">Your Name:</span> {name}</li>
            <li><span className="font-bold">Your Email:</span> {email}</li>
            <li><span className="font-bold">Phone Number:</span> {phoneNumber}</li>
            <li><span className="font-bold">Bank:</span> {bank}</li>
            <li><span className="font-bold">Account Holder:</span> {name}</li>
            <li><span className="font-bold">Account number:</span> {bankAccountNumber}</li>
            <li><span className="font-bold">Website:</span> <a href={website} target='_blank' rel='noopener noreferrer'>{website}</a> </li>
          </ul>
        </footer>
    </>
  )
}
