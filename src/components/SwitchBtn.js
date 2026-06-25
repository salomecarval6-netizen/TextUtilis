import React from 'react'
// 1. Put 'props' inside the function parentheses
export default function SwitchBtn(props) {
let color;
  return (

    <> {/*text imp 
    // 2. Use template literals `` to dynamically change classes based on props.mode
    // Best practice for checkboxes: use onChange instead of onClick */} 
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `} onClick={()=>{props.toggleMode()}}>
      <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" checked={props.mode === 'dark'} id="switchCheckDefault"/>
      <label className="form-check-label" htmlFor="switchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
    </div>

{/* FIXED: Wrapped the 'red' theme function inside an arrow function () =>
  props.toggleMode('red') with parentheses directly inside the onClick, 
  React executes it instantly on page load
  You must wrap that function call inside an arrow function () =>. 
  This tells React to only run it when a user actually clicks the button.
*/}

{/* 
The user selects the color directly by clicking a specific button inside your child component (like SwitchBtn.js), 
and that button sends the color choice back up to App.js
*/}

    </>
    
  )
}

{/* 
  className="form-check": This is a Bootstrap utility class that aligns a checkbox and its text label perfectly side-by-side.
  form-switch: This is the key Bootstrap class. It transforms a standard, square browser checkbox into a modern, pill-shaped sliding toggle switch.

  className="form-check-input": Tells Bootstrap to strip away the browser's default ugly checkbox look and apply its own sleek styling.
  type="checkbox": This is standard HTML. Under the hood, this switch is still just a regular checkbox that can be checked (true) or unchecked (false).
  role="switch": This is an accessibility attribute. It tells screen readers (for visually impaired users) to announce this element as a "switch" instead of a "checkbox".
  id="switchCheckDefault": A unique identifier for this specific input. This is critical for connecting it to the text label.


  className="form-check-label": Formats the text next to the switch so it has the right font size, spacing, and color.
  htmlFor="switchCheckDefault": This is the React version of the HTML for attribute. It must match the id of the input exactly.

*/}



{/* DIFF MODES OF SWITCHES:
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked/>
  <label className="form-check-label" htmlFor="switchCheckChecked">defaultCheckedswitch checkbox input</label>
</div>

<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled/>
  <label className="form-check-label" htmlFor="switchCheckDisabled">Disabled switch checkbox input</label>
</div>

<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" defaultCheckeddisabled/>
  <label className="form-check-label" htmlFor="switchCheckCheckedDisabled">Disabled defaultCheckedswitch checkbox input</label>
</div>
*/}  
    
