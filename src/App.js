//import logo from './logo.svg';
import './App.css';   //to apply all css into our webpage
import Navbar from './components/Navbar';
//import Toggle from './components/Toggle';
import TextForm from './components/TextForm';
import SwitchBtn from './components/SwitchBtn';
import Alert from './components/Alert'; 
import { useState } from 'react';
import About from './components/About';
//no import React from "react" needed. The build tools handle JSX automatically
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";


/* If each component had its own mode state, they could get out of sync thus put shared
  state in nearest common parent[App.js] and pass it through props.-> LIFTING STATE UP*/


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
//alert is an object which is set null initially

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#001524';
      showAlert("Dark mode has been enabled","success");
      //to give dynamic title
      document.title='Dark Mode';

      /* Not suggested to do:
      (to genearate titles continuosly)

      setInterval(()=>{
        document.title='Virus found';
        },2000)

      setInterval(()=>{
        document.title='Update software';
        },1500)

      */
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='Light Mode';
    }       

  }


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  return (
    <>
  {/* Move BrowserRouter to the top if Navbar or other components need to use router links */}
  <BrowserRouter>

    {/* The d-flex wrapper aligns all child switches horizontally */}

      <SwitchBtn mode={mode} toggleMode={toggleMode}/>
    
    {/* 
    // Left side: The name the Child component will use to read the data
    // Right side: The actual state variable living in App.js
    mode={mode} (The Information): This tells the child component what the current reality is
    */}
    
  
    <Navbar title="NavbarHeading" text="About Us" mode={mode} toggleMode={toggleMode}/>   
    <Alert alertName={alert}/>

    {/* here separate component is directly imported over here */}
    {/*title="NavbarHeading" is props passed as argument from parent to child component thus
     avoiding hardcoding values i.e helps seeting diff values for same component*/}
    {/*Multiple values, objects can be passed by props */}

      {/* DELETE OR REMOVE THIS ENTIRE BLOCK FROM YOUR APP.JS */}
    {/* Navigation Links
      <div className="container my-3">
          <Link to="/" className="mx-2">Textform</Link>
          <Link to="/about" className="mx-2">About</Link>
      </div>
    */}

      {/* Router Viewport: Only the active route displays here */}
    <div className="mb-2">
      <Routes>
        {/* Fixed the lowercase 'f' typo to match your import */}
        <Route path="/" element={<TextForm heading="TextForm" mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
      </Routes>
    </div>

     {/* <Toggle mode={mode} toggleMode={toggleMode}/>  */}
    </BrowserRouter>
    </>
  );
}

//imp-> file name function name in that file and tag name over here eg[Toggle] all should be same

export default App;


/*A] to Create a New Page:
Create the Component.  components/Pricing.js
export default function Pricing() { return <h1>Pricing</h1> }

Import the Component: App.js (at the top)
import Pricing from './components/Pricing';

Register the Route: App.js (inside <Routes>)
<Route path="/pricing" element={<Pricing />} />

Add the Nav Link: components/Navbar.js
<Link to="/pricing">Pricing</Link>



B] On page link:
Step 1,2,3 remains same
Add the Link on the Page: Import Link from react-router-dom at the top of your existing page file
and place your <Link to="/contact"> code right inside that page's JSX layout.

Put the <Link> in Navbar.js if you want it visible everywhere at the top of the screen.
Put the <Link> inside a specific page component if you only want it visible on that specific page
*/