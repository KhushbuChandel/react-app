// import React from 'react'
import React, { useState } from 'react';

//  const [text, setText] = useState('Enter text here');

export default function TextForm(props) {
    const handleUpClick = (event)=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        //setText("You have clicked on handleUpClick");
        setText(newText)
    }
    const handleLoClick = (event)=>{
      
      let newText = text.toLowerCase();

      setText(newText)
  }
    const handleOnChange = (event)=>{
      //console.log("On change");
      setText(event.target.value);
  }


    const [text, setText] = useState('');
    //text = "new text"; //Wrong way to change the state
    //setText("new text"); // Correct way to change the state
    
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
       
  
  <div className="mb-3">
    {/* <label for="mybox" class="form-lable">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h2>Here is the Text Summary!!</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.08*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}  