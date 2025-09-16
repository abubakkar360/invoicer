// import react from "react";

import { useState,useRef } from "react";
import ClientsDetails from "./Components/ClientsDetails";
import Dates from "./Components/Dates";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import Tables from "./Components/Tables";
import TableForm from "./Components/TableForm";
// import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import "./index.css"


function App() {
  const [showInvoice,setShowInvoice]= useState(false);
  const[name,setName]= useState("");
  const[email,setEmail]= useState("");
  const[address,setAddress]= useState("");
  const[clientName,setClientName]= useState("");
  const[clientAddress,setClientAddress]= useState("");
  const[invoiceNumber,setInvoiceNumber]= useState("");
  const[invoiceDate,setInvoiceDate]= useState("");
  const[dueDate,setDueDate]= useState("");
  const[notes,setNotes]= useState("");
  const[phoneNumber,setPhoneNumber]= useState("");
  const[bank,setBank]= useState("");
  const[bankAccountNumber,setBankAccountNumber]= useState("");
  const[website,setWebsite]= useState("");
  
  const[description,setDescription]= useState("")
  const[quantity,setQuantity]= useState("")
  const[price,setPrice]= useState("")
  const[amount,setAmount]= useState("")

  const[lists,setLists]=useState([]);

  const[isEditing,setIsEditing]= useState(false);

  const [total,setTotal]=useState(0);

  const contentRef = useRef();
  const reactToPrint = useReactToPrint({contentRef});

  const handlePrint = ()=>{
    window.print()
  }
  
  return (
    <>  
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-xl lg:mx-auto xl:max-w-4xl bg-white rounded shadow">
      
      { showInvoice ? (
        <>
        <button type="" onClick={reactToPrint}className="font-bold 
      bg-blue-500 
      text-white
      capitalize
      py-2 px-8 
      rounded shadow 
      border-2 
      border-blue-500 
      hover:bg-transparent 
      hover:text-blue-500 
      transition-all 
      duration-300">print / download</button>
        <div ref={contentRef} className="m-5">
        <Header handlePrint={handlePrint}/>            
        <Details 
        name = {name} 
        address = {address}
        />       
        <ClientsDetails 
        clientName={clientName} 
        clientAddress={clientAddress}
        />  

        <Dates 
        invoiceNumber={invoiceNumber} 
        invoiceDate={invoiceDate} 
        dueDate={dueDate}
        />        
        <Tables
        // description={description}
        // quantity={quantity}
        // price={price}
        // amount={amount}

        lists={lists}
        setLists={setLists}
        total={total}
        setTotal={setTotal}
        /> 

        <Notes notes={notes}/> 

        <Footer 
        name={name} 
        email={email} 
        phoneNumber={phoneNumber} 
        bank={bank} 
        bankAccountHolder={name} 
        bankAccountNumber={bankAccountNumber} 
        website={website} 
        />

      </div>
      <button onClick={()=>{setShowInvoice(false)}} type="" className="font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>

      </>
      ) : ( 
        <>
        {/* {name,address,client's name, client address 
        invoice number, invoice date, due date,notes,
         ph number, bank, bank a/c, website  } 
         */}
        <div className="flex flex-col justify-center">

          <div className="flex justify-center mb-15">
            <h1 className="font-bold text-4xl border-b-4">Write your invoice</h1>
          </div>

        <article className="md:grid grid-cols-2 gap-10">

        <div className="flex flex-col ">
          <label htmlFor="name">Enter your fullname</label>  
          <input 
          type="text" 
          name="name" 
          id="name" 
          value={name}
          placeholder="Enter your name here..."
          autoComplete="off"
          onChange={(e)=>setName(e.target.value)} 
        />
        </div>
        

        <div className="flex flex-col ">
          <label htmlFor="address">Enter your address</label>  
          <input 
          type="text" 
          name="address" 
          id="address" 
          value={address}
          placeholder="Enter your address here..."
          autoComplete="off"
          onChange={(e)=>setAddress(e.target.value)} 
        />
        </div>
        </article>


        <article className="xl:grid grid-cols-3 gap-10">          
        <div className="flex flex-col">
          <label htmlFor="email">Enter your email</label>  
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={email}
          placeholder="Enter your email here..."
          autoComplete="off"
          onChange={(e)=>setEmail(e.target.value)} 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="website">Enter your website</label>  
          <input 
          type="url" 
          name="website" 
          id="website" 
          value={website}
          placeholder="Enter your website here..."
          autoComplete="off"
          onChange={(e)=>setWebsite(e.target.value)} 
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Enter your phone number</label>  
          <input 
          type="text" 
          name="phoneNumber" 
          id="phoneNumber" 
          value={phoneNumber}
          placeholder="Enter your phoneNumber here..."
          autoComplete="off"
          onChange={(e)=>setPhoneNumber(e.target.value)} 
          />
        </div>
        </article>

        <article className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label htmlFor="bank">Enter your bank</label>  
          <input 
          type="text" 
          name="bank" 
          id="bank" 
          value={bank}
          placeholder="Enter your bank here..."
          autoComplete="off"
          onChange={(e)=>setBank(e.target.value)} 
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bankAccountNumber">Enter your bank account number</label>  
          <input 
          type="text" 
          name="bankAccountNumber" 
          id="bankAccountNumber" 
          value={bankAccountNumber}
          placeholder="Enter your bankAccountNumber here..."
          autoComplete="off"
          onChange={(e)=>setBankAccountNumber(e.target.value)} 
        />
        </div>
        
        </article>

        <article className="md:grid grid-cols-2 gap-10 md:mt-16">
          
        <div className="flex flex-col">
          <label htmlFor="clientName">Enter your client name</label>  
          <input 
          type="text" 
          name="clientName" 
          id="clientName" 
          value={clientName}
          placeholder="Enter your clientName here..."
          autoComplete="off"
          onChange={(e)=>setClientName(e.target.value)} 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="clientAddress">Enter your client address</label>  
          <input 
          type="text" 
          name="clientAddress" 
          id="clientAddress" 
          value={clientAddress}
          placeholder="Enter your clientAddress here..."
          autoComplete="off"
          onChange={(e)=>setClientAddress(e.target.value)} 
          />
        </div>
        </article>

        <article className="xl:grid grid-cols-3 gap-10">
        <div className="flex flex-col">
          <label htmlFor="invoiceNumber">Enter your invoice number</label>  
          <input 
          type="text" 
          name="invoiceNumber" 
          id="invoiceNumber" 
          value={invoiceNumber}
          placeholder="Enter your invoiceNumber here..."
          autoComplete="off"
          onChange={(e)=>setInvoiceNumber(e.target.value)} 
          />
        </div>
        

        <div className="flex flex-col">
          <label htmlFor="invoiceDate">Enter your invoice date</label>  
          <input 
          type="date" 
          name="invoiceDate" 
          id="invoiceDate" 
          value={invoiceDate}
          placeholder="Enter your invoiceDate here..."
          autoComplete="off"
          onChange={(e)=>setInvoiceDate(e.target.value)} 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="dueDate">Enter your due date</label>  
          <input 
          type="date" 
          name="dueDate" 
          id="dueDate" 
          value={dueDate}
          placeholder="Enter your dueDate here..."
          autoComplete="off"
          onChange={(e)=>setDueDate(e.target.value)} 
          />
        </div>
        </article>        

          <TableForm
          description={description}
          setDescription={setDescription}
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
          setPrice={setPrice}
          amount={amount}
          setAmount={setAmount}
          lists={lists}
          setLists={setLists}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          total={total}
          setTotal={setTotal}
          />

        <label htmlFor="notes">Additional notes</label>
          <textarea 
          name="notes" 
          id="notes" 
          rows="10" 
          cols="30" 
          placeholder="Additional notes to the client"
          value={notes}
          onChange={(e)=>setNotes(e.target.value)}
          >

          </textarea>
      <button onClick={()=>{setShowInvoice(true)}} type="" className="
      font-bold 
      bg-blue-500 
      text-white 
      py-2 px-8 
      rounded shadow 
      border-2 
      border-blue-500 
      hover:bg-transparent 
      hover:text-blue-500 
      transition-all 
      duration-300"
      >Preview Invoice</button>
        </div>
        </>
        
      )}             
      </main>
    </>
  );
}

export default App;
