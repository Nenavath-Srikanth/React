// import React, { useState } from 'react';
// import axios from 'axios';

// const AadharUpload=()=>{
//     const[file,setfile]=useState('')
//     const [filename, setFilename] = useState('Choose File');
//     const [Text,setText]=useState('')


//     const onChange = e => {
//         setFile(e.target.files[0]);
//         setFilename(e.target.files[0].name);
//       };
//       const handleChange=e=>{
//         setText([e.target.name]=e.target.value);
//       }

//     const onSubmit = async e => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('image', file);
//         formData.set('values',Text);
        
//             const res = await axios.post('http://localhost:3001/api/v1/image/uploadimage', formData, {
//               headers: {
//                 'Content-Type': 'multipart/form-data'
//              } },
//            )}
            


//     return(
//         <div >
//             <form onSubmit={onSubmit}>
//              <div class="row">
//         <div class="col-sm-4 text-center">
//             <div className="file-loading">
//                     <input  type="file" onChange={onChange} />
//                     {/* <img src={}/> */}
//                     </div>
//                 </div>
//                 <div class="col-sm-6">
//                 <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" class="form-control" placeholder='enter username' onChange={handleChange}/>
//                     {/* </div> */}
//                 {/* <div className="form-group"> */}
//                         <label>EmailId</label>
//                         <input type="text" class="form-control" placeholder="enter mail id" onChange={handleChange} />
//                         <label>Aadhar</label>
//                         <input type="file" class="form-control" placeholder="Upload Aadhar" onChange={onChange} />
//                         {/* <img src={}/> */}
// <hr/>
//                         <div className="form-group">
//                 <div className="text-center">
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </div>
//                 </div>
                       
//                     </div>
//                     </div>


              
//                 </div>
//                 </form>
              
//         </div>
//     )
//     }
// export default AadharUpload;