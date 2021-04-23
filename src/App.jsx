import React, { useState } from "react";
import SingleColor from "./SingleColor.jsx";
import Values from "values.js";
// ($env:HTTPS = "true") -and (npm start) ; USE THIS TO RUN APP IN HTTPS HOST

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      // console.log(colors);
      setList(colors);
    } catch(error){
      setError(true);
      console.log(error);
    }
    
  }

  return (
    <>
    <div className="container">
      <h1>Color Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorValue">
          Enter Color Code: 
        </label>
        <input 
        onChange={(e) => {
          setColor(e.target.value);
        }}
        placeholder="#f15025"
        type="text" 
        name="colorValue" 
        value={color} 
        className={`${error ? 'error' : null}`} />
        <button className="btn" >
          Generate Colors
        </button>
      </form>
    </div>
    <div className="colors">
      {
        list.map((color, index)=>{
          // console.log(color);
          return(
            <SingleColor 
            key={index} 
            {...color} 
            index={index}
            hexColor={color.hex} />
          )
        })
      }
    </div>
    </>
  );
}



export default App;
