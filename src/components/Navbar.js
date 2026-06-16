import React from 'react'   //abbr->rfc 
import PropTypes, { nominalTypeHack } from 'prop-types'  //impt
import { Link } from 'react-router-dom'; // Imported Link to prevent reloads


/* <nav  >
      <h3>{props.title}</h3>
      //Props are read-only cant be modified by child
      <ul className="navBox">
        <li>NAVBAR</li>
        <li>HOME</li>
        <li>{props.text}</li>
         2. ADDED: A list item with a button that actually calls the toggle function when clicked 
        <li>
        
          <button type="button" onClick={props.toggleMode}>Toggle Theme</button>
          
        </li>
      </ul>
    </nav>
*/

export default function Navbar(props) {
  return (
    <>
    <h1>{props.title}</h1>
{/*1. ADDED: The outer nav container with expand classes to force visibility*/}
<nav className="navbar navbar-expand-lg bg-body-tertiary"
style={{backgroundColor:props.mode==='light'?'white':'black',
                  color:props.mode==='light'?'black':'white'}}>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">

          {/* Replaced <a> with <Link> and href with to so they itself are navigation link */}
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          {/*fixed path to /about */}
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Pricing</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

//tells about prop types
Navbar.propTypes={   //small p
      title:PropTypes.string.isRequired,  //will case error if not passes and also no default value set
      text:PropTypes.string  //if no default set and prop not passed React gives undefined not an error
    }


Navbar.defaultProps={  //in case props are not passed then use these values
        title:"Set title here",
        text:"About text here"
      };

