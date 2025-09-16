import React from 'react'

export default function ClientsDetails({clientName,clientAddress}) {
  return (
    <>
      <section className="mt-5">
          <h2 className="font-bold text-2xl uppercase mb-1">{clientName} </h2>
          <p>{clientAddress}</p>
      </section>
    </>
  )
}
