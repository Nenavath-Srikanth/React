// import logo from './logo.svg';
import { HashRouter } from 'react-router-dom';
import './App.css';
// import { HashRouter } from 'react-router-dom';
// import ImageLoad from './ImageLoad';
// import ImageView from './ImageView';
// import ImageTest from './ImageTest';
import Navigation from './Navigation';
import AadharUpload from './AadharUpload';

function App() {
  return (
    <div >
     
        <HashRouter>
<Navigation></Navigation>  
</HashRouter>  

{/* <AadharUpload></AadharUpload> */}

    </div>
  );
}

export default App;
