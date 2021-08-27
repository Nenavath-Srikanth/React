import React, {useEffect, useState } from "react";
import CompletedButton from "./Completedbutton";
import ApprovedButton from "./ADbutton";
const DeveloperPage = () => {
    const [approve, setapprove] = React.useState(true);
    const [denied, setdenied] = React.useState(true);

  //const [todos, setTodos] = useState([]);
  const [devimage,setdevimage]=useState([]);
  //delete todo function
  const getDev = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/image//displayimage");
      const ImageData = await response.json();
      setdevimage(ImageData.result);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getDev();
  }, []);

  
  
  return (
     <div className='container'>
         <form   >
         {/* <input type="id"  placeholder='enter a id to reset biometric' value={id}  className='form-control' /> */}
         {/* <input type="submit" class="btn btn-warning" /> */}
         {/* <EditTodo /> */}
         {/* <td><EditTodo todo={todos}/></td> */}
      
       
        
          {devimage.map(value => (
            <div key={value.id}>
              <table className="table mt-5">
                
              <tr>  <td> <img src={'http://localhost:3001/upload/'+value.image_filename} width="150px"  />&nbsp;&nbsp; </td>
              <td>  {value.status=='pending' ? <h4>Waiting for Approvel</h4>:null }</td>
              <td>  {value.status=='approved' ? <CompletedButton value={value}/>:null}</td>
              <td>   {value.status=='completed' ? <h4>Approved and cleard</h4>:null}</td>



          <br />
          {/* {value.image_filename}<br/>
          {value.image_filepath}<br/> */}
         <td>  {value.textarea}</td>

          </tr>

          </table>
              
                
              
            </div>
          ))}
      
      </form>
      </div>
  );
};
export default DeveloperPage;