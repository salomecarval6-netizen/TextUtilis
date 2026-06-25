import React from 'react'

function Alert(props) {
const capitalize=(text)=>{
      const lower=text.toLowerCase();
      return lower.charAt(0).toUpperCase()+lower.slice(1);
    }


  return (
    <>
  {/*Imp to set so as to prevent changing the layout when alert disappers */}
  <div style={{height:'50px'}}>
    {/*The Core Alert Utilities (alert alert-warning)alert: This is the base Bootstrap utility class. It strips away standard paragraph margins, sets a comfortable font size, and adds uniform padding and a subtle border radius around the inner text [Sentry].
    alert-warning: This applies the color theme [Sentry]. In Bootstrap's default design palette, "warning" styles the container with a soft yellow/amber background, dark yellow text, and a matching amber border. It is typically used to draw attention to important notices or caution flags.
    2. The Close Button Configuration (alert-dismissible fade show)alert-dismissible: This class reserves extra padding on the far right side of the container box [Sentry]. This ensures that any long text lines do not accidentally crash into or clip underneath the close button icon.
    fade: This initiates Bootstrap's native CSS transition wrapper engine. When the alert is dismissed, this class causes the container to gracefully melt away and dissolve smoothly over a fraction of a second, rather than disappearing instantly and jarringly. 
    show: This acts as a visual toggle switch. It tells the browser engine that on the very first page load, the alert container must be visible by default.
    role="alert": This is an essential HTML accessibility attribute (called an ARIA role). It tells screen readers (used by visually impaired users) to instantly prioritize and announce this content out loud the moment it pops onto the screen, ensuring a high-quality experience for all users
    */}


{/* 1. FIXED: Added curly braces around the JavaScript logic block */}
    {props.alertName && <div className={`alert alert-${props.alertName.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alertName.type)}</strong>:{props.alertName.msg}

    {/*
    disability of user to click on X
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>*/}
    </div>
    }
</div>
    </>

  )
}

export default Alert

//props.alert && -> simply means that only is props.alert is not null 
// then only evaluate the further part else just return