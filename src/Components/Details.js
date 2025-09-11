import React from 'react'

export default function Details({name,address}) {
  return (
    <>
      <section className=" mt-5 flex flex-col items-end">
          <h2 className="text-xl uppercase lg:font-bold lg:text-2xl">{name}</h2>
          <p>{address}</p>
      </section>
    </>
  )
}
