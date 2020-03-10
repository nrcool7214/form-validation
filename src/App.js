
import React, { useState } from 'react';

function App() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const [status,setStatus]=useState(false)

  const formSubmission=(e)=>{
    e.preventDefault();
   

    /* checking for empty field */
    if(!(name.length>0&& email.length>0&&message.length>0)){
      alert("please fill out empty fields")
    }else{
      let emailcheck= email.split("@")
   let emailLeft= emailcheck[0]
   let emailRight=emailcheck[1]

      if(emailLeft.length<=3){
        alert("email to Short")
      }else{

        let number="0123456789."
        
        let count=0
        for(let i=0;i<number.length;i++){
            if(emailLeft.includes(number[i])){

              console.log(number.split("")[i])
              count++
            }
        }
        if(!(count<emailLeft.length)){
          alert("You need atleast on alphabet letter before @")
        }else{
          let domain=emailRight.split(".")[1]
  
        let alldomain=["com","de","org","net"]
        if(!alldomain.includes(domain)){
          alert("Domain name should be com,org,net or de")
        }else{
          setStatus(true)
        }
        }

      }



      }

     


    
  }

  return (
    <div className="App">
      <h1>Contact Page</h1>
      {status?<h1>Thanks for your Submission</h1> :  <form onSubmit={formSubmission}>
        <label>Name :</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}/> <br/>
        <label>Email :</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}/> <br/>
        <label>Message :</label>
        <textarea cols="30" rows="10" onChange={(e)=>setMessage(e.target.value)}>
        </textarea> <br/>
        <input type="submit" value="Submit"/>
      </form>}
     
    </div>
  );
}


export default App;