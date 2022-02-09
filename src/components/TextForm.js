import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared ","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = () =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  };

  const copyToClipboard=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success");
  };


  return (
    <div>
      <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode==='dark'? 'grey':'white'}}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={copyToClipboard}>
          Copy
        </button>
        <div className="container my-2" style={{color: props.mode==='dark'? 'white':'black'}}>
          <h1>Your Text Summary</h1>
          <p>{text.length} Characters</p>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words </p>
          <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minute to read</p>
        </div>
      </div>
    </div>
  );
}
