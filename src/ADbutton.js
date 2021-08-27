import React,{useState} from 'react';

const ApprovedButton=({value})=>{
  const[id,setid]=useState(value.id)
 console.log(id)
    const ApprovedHandle=(e)=>{
      // e.preventDefault();
       console.log('approved clicked')
       try{
         const body={id,status:'approved'}
         const response= fetch(`http://localhost:3001/api/v1/updatestatus/put/${id}`,{
           method:'PUT',
           headers:{'content-type':'application/json'},
           body:JSON.stringify(body)
         })
         console.log(body)
         window.location="/";
        // this.forceUpdate();
       
       }
       catch(err){
         console.err(err.message)

       }
    //     axios.put(`http://localhost:3001/api/v1/updatestatus/put/${id}`,{status:'approved'})
    //    .then(response => {
    //     console.log(response)
    // })
        
        }
      
      const DeniedHandle=(e)=>{
        console.log('Denied clicked')
        
    
      }

    return(
        <div>         
        <button onClick={ApprovedHandle}>Approved</button>&nbsp;&nbsp;
        <button onClick={DeniedHandle} >Denied</button>
        </div>
    )
}
export default ApprovedButton;


