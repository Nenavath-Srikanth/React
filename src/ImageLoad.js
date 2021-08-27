import { useState } from "react";
import React from "react";
// import { NavLink } from "react-router-dom";
import axios from "axios";
class ImageLoad extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      textarea: "",
      image:"",
      filepath:"beta",
      mimetype:"gama",
      imagesize:"123",
      filename:"alpha"
    };
  }
  handleInput=(e)=>{
    this.setState({[e.target.name]:e.target.files[0]})
  }
  handleSubmit=(e)=>{
    let file=this.state.image
const formdata= new FormData()
formdata.append('image',file)
// formdata.append('username',username)
// formdata.append('email',username)
// formdata.append('filename',filename)
// formdata.append('filepath',filepath)
// formdata.append('mimetype',mimetype)
// formdata.append('imagesize',imagesize)
// formdata.append('textarea',textarea)


    e.preventDefault();
    console.log(this.state)
    console.log('step1')
    axios({
      url:"http://localhost:3001/imageupload/upload",
      method:"POST",
      data:formdata
    })
    .then((res)=>{
     console.log(res)
      }
    ,(err)=>{
      console.log(err)
      }
     ) }
  //   .post("http://localhost:3001/imageupload/upload",formdata)
  //   .then(response=>{
      
  //     console.log(response)
     
  //   })
  //   .catch(error=>{
  //     console.log(error)
  //   })
  // }
///////////////////////////////////////////////////////////////////////////////////
//   const ImageLoad=()=>{
//     const[userRegistration,SetUserRegistration]=useState({
//       username: "",
//        email: "",
//       textarea: "",
//      image:""

//     })
//     const[Record,setRecord]=useState({})
//     const handleInput = (event) => {
//       const name = event.target.name;
//      const value = event.target.value;
//       SetUserRegistration({...userRegistration,[name]: value})
//   };
//  const handleSubmit=(event)=>{
//    event.preventDefault();
//    const EventRecord={...userRegistration,id: new Date().getTime().toString()}
   
//   setRecord=([...Record,EventRecord])
//    console.log(EventRecord);
//    SetUserRegistration({username:"",email:"",textarea:"",image:""})


////////////////////////////////////////////////////////////////////////////////////
  // // POST request using axios with error handling
  // axios.post('http://localhost:3001/imageupload/upload', EventRecord)
  // .then(response =>this.setState({ image: response.data }))
  // .catch(error => {
  //     this.setState({ errorMessage: error.message });
  //     console.error('There was an error!', error);
  // });


  
    // // Simple POST request with a JSON body using axios
    // const article = { username:"srikanth ",email:"enter mail",textarea:"enter values",image:"upload image" };
    // axios.post('http://localhost:3001/imageupload/upload', article)
    //     .then(response => this.setState({ articleId: response }));





//  }
   
    
   

  //  const response= await fetch('http://localhost:3001/imageupload/upload',{
  //    method:POST,
  //    body:JSON.stringify(EventRecord)

  //  })
  //  const data=await response.JSON()
  //  console.log(data)
  


  
  





   

  //   axios.post("http://localhost:3001/imageupload/upload", this.state).then(
  //     (response) => {
        
        
  //       if (response.data) {
  //         console.log(response);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };
  render() {

  const {username,email,textarea,image}=this.state
    return (
      <div>
        <div className="well">
          <div className="container">
            <div className="row">
              <aside className="col-sm-4">
                <article className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label>Username:</label> &nbsp;
                      <div>
                        <input
                          name="username"
                          value={username}
                          className="form-control"
                          placeholder="enter username"
                          type="text"
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email Id:</label> &nbsp;
                      <div>
                        <input
                          name="email"
                          value={email}
                          className="form-control"
                          placeholder="Email"
                          type="email"
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Type here:</label> &nbsp;
                      <div>
                        <textarea
                          name="textarea"
                          value={textarea}
                          className="form-control"
                          placeholder="Type here"
                          type="text"
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      &nbsp;
                      <label>Upload Image:</label>
                      <div>
                        <input
                        name="image"
                        value={image}
                          type="file"
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                   
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Register
                      </button>
                   
                  </form>
                </article>
              </aside>
            </div>
          </div>
        </div>
        
     
      </div>
     
        );
  
    }
  
  }

export default ImageLoad;
