import React  from "react";
import reactDom from "react-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import ApprovedButton from "./ADbutton";
import CompletedButton from './Completedbutton'




const DisplayImage=()=>{
  const[Image,setImage]=useState([])
  const[statusValue,setstatusValue]=useState('')


  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/image//displayimage");
      const ImageData = await response.json();
      setImage(ImageData.result);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getTodos();
  }, []);
  // console.log(id);
  // console.log('view of status from db',Image[0].status);
    //  setstatusValue(...statusValue,Image[0].status)

  // const textvalue=Image[0].textarea;
  // console.log(textvalue)
  // setstatusValue(...statusValue,Image[0].status)
  // console.log(setstatusValue)

  // console.log('view of status from db',JSON.stringify(Image[0]));
  // const status = JSON.stringify(Image[0].status);
  // console.log('after', status);
  // const statusValue2=Image[0].status
  // console.log(statusValue)
  // if(statusValue==pending)
  // { console.log('button active')}
  // else{ console.log('no buttons')
  //   }

  // const Status=(Image.status==pending)=>{

  // }
  // 
       
 
  // console.log(Image)
  return (
     <div className='container'>
         <form   >
         {/* <input type="id"  placeholder='enter a id to reset biometric' value={id}  className='form-control' /> */}
         {/* <input type="submit" class="btn btn-warning" /> */}
         {/* <EditTodo /> */}
         {/* <td><EditTodo todo={todos}/></td> */}
      
       
        
          {Image.map(value => (
          
          <div key={value.id}>
            {value.id}
                 <img src={'http://localhost:3001/upload/'+value.image_filename} width="150px"  />
          
    {value.status=='pending' ? <ApprovedButton value={value}/>:null} 
    {value.status=='approved'?<h4>Approved</h4>:null}
    {value.status=='completed'?<h4>Issue Resolved</h4>:null}
      

          <br />
          {/* {value.image_filename}<br/>
          {value.image_filepath}<br/> */}
        <div>  {value.textarea} </div>
        {value.status}

              
                
              
            </div>
          ))}
      
      </form>

      </div>
  );
};
export default DisplayImage;


   
      





// class DisplayImage extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       products:[],
//     };
//   }
  
//   // const [Image, setImage] = useState({});
  

//   componentDidMount() {
//     axios
//       .get('http://localhost:3001/api/v1/image//displayimage')
//       .then((response) => {
//         console.log(response.data);
//         //this.state = {  data: [] };
//         this.setState({products:response.data.result });
//         // const image='localhost:3001/'+products.
        
//       });
      
//   }
//   ApprovedHandle=(e)=>{
//     console.log('Approved clicked')
//   }
//   DeniedHandle=(e)=>{
//     console.log('Denied clicked')
//   }
  

//   renderList() {
//     console.log(this.state);
//     let productsList = this.state.products;
//     let ListItems=this.state.products.map(value=>{
//       return (
//         <li key={value.id}>
          
// {/*             
//           <img src={'localhost:3001/'+value.image_filepath}   /> <br/>
//           <img src={value.image_filepath}   /> <br/> */}



//           <img src={'http://localhost:3001/upload/'+value.image_filename} width="150px"  />&nbsp;&nbsp; 
//           <button disabled={this.approve} onClick={this.ApprovedHandle}>Approved</button>&nbsp;&nbsp;
//         <button disabled={this.denied} onClick={this.DeniedHandle}>Denied</button>

//           <br />
//           {value.image_filename}<br/>
//           {value.image_filepath}<br/>
//           {value.textarea}
//         </li>
//       )
//     })
//     return ListItems;
//   }
  
//   render() {

//     return (
//       <div>
//         <h1>Display Image</h1>
//         <ul>{this.renderList()}</ul>
       


//       </div>
//     );
//   }
// }
// export default DisplayImage;
