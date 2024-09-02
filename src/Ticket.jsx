import { useState } from "react";

export default function Ticket(){
    let[ticket, setTicket] = useState("");
    let [message,setMessage]=useState("");
  
    let randomNumber=()=>{
        let newTicket=Math.floor(Math.random() * 900) + 100;
        const sumOfDigits=newTicket.toString().split('').reduce((a,b)=>a + parseInt(b,0),0);
       if(sumOfDigits === 15){
        setMessage("Congratulation! You won the lottery!");
       }else{
        setMessage("");
       }
        setTicket(newTicket);
    }
    return(
        <div>
              <h1>Lottery Game</h1>
            <h3>Lottery Ticket={ticket}</h3>
            {message  && (<p>{message}</p>)}
            <button  onClick={randomNumber}>Get New Ticket</button>
        </div>
    );
        
    
}