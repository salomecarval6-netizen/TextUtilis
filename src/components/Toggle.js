import React from 'react'


// 1. Accept props from App.js
export default function Toggle(props) {
  
  // 2. Instead of a local useState, compute the styles dynamically based on props.mode
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
    border: props.mode === 'dark' ? '1px solid white' : '1px solid black',
    padding: '20px',
    borderRadius: '8px'
  }

  return (
    <>
      {/* 3. Apply the dynamic style object here */}
      <div className='container my-3' style={myStyle}>
        <h1>DARK MODE COMPONENT</h1>
        <div className='mx-3'>
          {/* 4. Trigger the global toggleMode function when clicked */}
          <button type="button"  className="btn btn-primary" onClick={props.toggleMode}>
             Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
          </button>  
        </div>
      </div>
    </>
  )
}





{/*
  this is an inependent separate component using local state
  start--->
  import React, { useState } from 'react'

  export default function Toggle () {
  const[ myStyle,setMyStyle]=useState({
                              color: 'white',
                              backgroundColor: 'black'
                            })


  const[btnTxt,setBtnTxt]=useState("Light mode")
  const ToggleStyle=()=>{
    if(myStyle.color==='white')
    {
      setMyStyle({
                  color: 'black',
                  backgroundColor: 'white',
                  border: '1px solid black'
                })
      setBtnTxt("Dark Mode")
    }
    else
    {
      setMyStyle({
                  color: 'white',
                  backgroundColor: 'black',
                  border: '1px solid white'
                  })
       setBtnTxt("Light Mode")
    }
  }


  return (
    <>
    <div className='container' style={myStyle}>
    <h1>DARK MODE</h1>
    <div className='mx-3' style={myStyle}>
    <button type="button" className="btn btn-primary" onClick={ToggleStyle}>{btnTxt}</button>
    </div>
    </div>
    </>
    
  )
}
  ---->end

*/}
