import React,{useState} from 'react'

export default function TextForm(props) {

  const[text,setText]=useState("")  
  //Takes prev state value combine it with new value and store result as new State therefore"
  //text="new Text"  wrong
  //setText("new Text")  correct way 


  // 1. ADD THIS: Initialize the color state variable (starts as black text)
  const [boxColor, setBoxColor] = useState("black");

  const changeColor=()=>{
    setBoxColor("green");
  }

  const [fontSize,setSize]=useState(15)

                      

  const changeSize=()=>{
            setSize(fontSize+2)
  }

  const handleOnChange = (event) =>{
  setText(event.target.value); 
}

const handleOnClick = (event)=>{
  event.preventDefault(); // <-- THIS FIXES IT. Stops the page from reloading!
  let newText=text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to UpperCase","success");
}


const handleCopyText = (event) => {
  event.preventDefault(); // Stops the form from submitting and refreshing the page
  
  // 1. Reads data directly from your 'text' state variable 
  // 2. Copies it directly to the user's system clipboard
  navigator.clipboard.writeText(text); 
  props.showAlert("Text Copied","success");
};


const removeExtraSpaces = (event) => {
  event.preventDefault();
  
  // 1. Split the text by spaces, filter out empty spaces, and join back with a single space
  let newText = text.split(/[ ]+/).join(" ");
  
  // 2. Trim removes any remaining blanks at the very start or end
  setText(newText.trim()); 

  props.showAlert("Extra space removed","success");
};



// 1. Initialize a boolean state to track the starting pattern (starts True / Uppercase)
const [curr, change] = useState(true);
const alternateText = (event) => {
  event.preventDefault(); // Prevents form submission refresh
  let result = "";          // Local variable to accumulate our letters
  let toggle = curr;        // Create a copy of our state boolean to safely flip inside the loop
  // 2. Loop through every character of the string
  for (let ch of text) {
    if (toggle) {
      result += ch.toUpperCase(); // Append capitalized letter
    } else {
      result += ch.toLowerCase(); // Append lowercase letter
    }
    // Flip our local boolean switch for the next letter in line
    toggle = !toggle; 
  }
  // 3. Save the completed new string into your text box state
  setText(result);
  // 4. Flip the global pattern state so the next button click reverses the layout pattern!
  change(!curr);
   props.showAlert("Alternate text generated","success");
};

// Dynamically calculate the matching text styling color for this form container
  const textStyleColor = props.mode === 'dark' ? 'white' : 'black';
  const btnTheme='primary';

  return (
  <>

    <form style={{color:textStyleColor}}>
    <h1>{props.heading}</h1>

    {/*mx-auto stands for "Margin Horizontal Auto". It is used to automatically center a 
    block-level element horizontally inside its parent container
    w-50 stands for "Width 50%". */}

    <div className="mb-3 w-75 p-3 rounded"
      style={{ fontSize: `${fontSize}px`,
                  
                  color:props.mode==='light'?'white':'black'}} >

      {/*backgroundColor:props.mode==='light'?'black':'white', no need in above */}
      {/*the <label> element represents a caption or text description for a user interface item. 
      It tells both the user and the browser what information should be entered into a specific 
      form control (like an <input>, <textarea>, or <select> element) 
      
      Defines a caption for a form control
      
      Uses the for attribute to link to an input id
      
      Clicking it focuses or toggles the linked input
      
      <label htmlFor="emailIp" className="form-label" >Email address</label>
      <input type="email" className="form-control" id="emailIp" aria-describedby="emailHelp"/>
    */}

    {/*mb-3 stands for "Margin Bottom 3"*/} 
        <textarea className="text" placeholder="Enter text here..." value={text} onChange={handleOnChange} id="myBox" 
          style={{color:boxColor}}
          rows="4"
          // 2. Link the inline style directly to your fontSize state variable
          //{used to show {use to write js obj} javascript} thus {{}}
        >
        </textarea>
          
    </div>


 {/*Why we don't pass toggleMode to the buttons
 toggleMode is an ACTION (a function): Its only job is to change the state when something is clicked.
 The ternary operator is the STYLE (the data): Its job is to figure out what color the button should look like right now.
 */}


  <div className="d-flex flex-wrap gap-2 mb-3"
  style={{backgroundColor:props.mode==='light'?'white':'black',
                  color:props.mode==='light'?'black':'white'}}>
    {/*d-flex: This activates the CSS Flexbox layout engine. It forces all immediate child elements (your buttons) to sit perfectly flat in a horizontal row by default.
    flex-wrap: This is crucial for responsive design. If your user views the page on a small screen (like a smartphone), this class allows the buttons to neatly drop down to a second row instead of cutting off or stretching off the screen.
    gap-2: This replaces the old mx-3 setup. It adds clean, uniform spacing between all buttons horizontally and vertically, without needing margins on individual items.
    mb-3: Adds standard spacing beneath the entire row of buttons so they do not crowd your word counter section */}
        <button type="button" className={`btn btn-${btnTheme}`}  onClick={changeSize
        }>Resize</button>
     
        <button type="button" className={`btn btn-${btnTheme}`}  onClick={handleCopyText}>COPY</button>
    
        <button type="button" className={`btn btn-${btnTheme}`}  onClick={removeExtraSpaces}>Remove Blank</button>
 
        <button className={`btn btn-${btnTheme}`} type="button" onClick={handleOnClick} >To UpperCase</button>
        {/*By default, buttons inside forms act as type="submit" */}
    
        <button type="button" className={`btn btn-${btnTheme}`}  onClick={changeColor}>GREEN</button>
    
        <button type="button" className={`btn btn-${btnTheme}`}  onClick={alternateText}>alternateText</button>
  
  </div>


    <button type="submit" className={`btn btn-${btnTheme}`}>Submit</button>
    {/* btn (STRUCTURE) btn-primary (STYLING)
    
    btn-success: Turns green (used for save, success, or positive actions).
    btn-danger: Turns red (used for delete, cancel, or permanent actions).
    btn-warning: Turns yellow (used for warnings or caution).
    btn-secondary: Turns gray (used for neutral or alternative choices)
    */}
    <div className='container' 
    style={{backgroundColor:props.mode==='light'?'white':'black',
                  color:props.mode==='light'?'black':'white'}}>
      <h1>Word Counter</h1>
      <p>{text.length && text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </form>
  </>
  )
}


