import React, { useState } from "react";
import "./Land.css";

function App() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [Name, setName]= useState("");
  const [color, setColor] = useState("");
  const [signature, setSignature] = useState(null); 
  const [Vehicle,setVehicle]=useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log("Form submitted!");
    setIsSubmitted(true);
  };
  const handleFileChange = (event) => {
    setSignature(event.target.files[0]);
  };
  return (
    <div className="App2">
      <h1 id>Land Registration</h1>
      {isSubmitted ? (
        <h1 id='S'>Form submitted successfully!</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Ownership Details:</label>
            <input
              type="text"
              id="Name"
              value={Name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Brand">Property Type:</label>
            <input
              type="text"
              id="make"
              value={make}
              onChange={(event) => setMake(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="model">Survey Number:</label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={(event) => setModel(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Vehicle">Location Details:</label>
            <input
              type="text"
              id="Vehicle"
              value={Vehicle}
              onChange={(event) => setVehicle(event.target.value)}
              required
            />
          </div>
       
          <div className="form-group">
            <label htmlFor="color">Tax information:</label>
            <input
              type="text"
              id="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Engine">Signature and notary:</label>
            <input
              type="file"
              id="signature"
              accept="image/png, image/jpeg, application/pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default App;