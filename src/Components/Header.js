import React from 'react'

export default function Header({handlePrint}) {
  return (
    <>
      <header className="flex flex-col items-center xl:flex-col justify-center">
                <div>
                  <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h1>
                </div>
                {/* <div>
                  <ul className="flex items-center justify-between flex-wrap">
                    <li><button type="" onClick={handlePrint} className="font-bold bg-gray-500 text-white py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300">Download</button></li>
                    <li><button type=""  className="mx-2 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Download</button></li>
                    <li><button type="" className="bg-green-500 py-2 px-8 font-bold text-white border-2 border-green-500 rounded shadow hover:bg-transparent hover:text-green-500 transition-all duration-300 ">Send</button></li>
                  </ul>
                </div> */}
      </header>
    </>
  )
}
