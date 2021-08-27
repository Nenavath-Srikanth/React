import React,{useState} from 'react';

const CompletedButton=({value})=>{
    const[id,setid]=useState(value.id)

 
    const CompletedHandle=(e)=>{
      e.preventDefault();
       console.log('approved clicked')
       try{
        const body={id,status:'completed'}
        const response= fetch(`http://localhost:3001/api/v1/updatestatus/put/${id}`,{
          method:'PUT',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(body)
          
        })
        console.log(body)
        window.location="/#/DeveloperPage"


      }
      catch(err){
        console.err(err.message)

        
        }
    }
     

    return(
        <div>         
        <button onClick={CompletedHandle}>Completed</button>&nbsp;&nbsp;
        
        </div>
    )
}
export default CompletedButton;