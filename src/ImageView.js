import React from 'react';
import axios from "axios"

class ImageView extends React.Component {
    state={
        SelectedFile:null
    }
    FileSelectedHandler=(event)=>{
        // this.setState({
        //     SelectedFile:event.target.files[0]

        // })
        console.log(event.target.files[0])
    }
    // FileSelectedHandler=()=>{
    //     const formdata=new FormData();
    //     formdata.append("image",this.state.SelectedFile)
    //     axios.post("http://localhost:3001/imageupload/upload","hello world")
    //     .then(res=>{
    //         console.log(res)
    //     })

    // }

  render(){
return (
    <div>
        <input type="file" onChange={this.FileSelectedHandler}/>
        <button onClick={this.FileUploadHandler}>Upload</button>
    </div>
)


  }     
}   



export default ImageView;