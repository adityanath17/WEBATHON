import React, { useState } from "react";
import "./Vehicle.css";

function App() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [Name, setName]= useState("");
  const [color, setColor] = useState("");
  const [Vehicle,setVehicle]=useState("");
  const [Engine,setEngine]=useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log("Form submitted!");
    setIsSubmitted(true);
  };

  return (
    <div className="App1 p-5">
      <h1 id='S'>Vehicle Registration</h1>
      {isSubmitted ? (
        <h1 id='S'>Form submitted successfully!</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Owner's Name:</label>
            <input
              type="text"
              id="Name"
              value={Name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Brand">Brand:</label>
            <input
              type="text"
              id="make"
              value={make}
              onChange={(event) => setMake(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={(event) => setModel(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Vehicle">Vechicle Type:</label>
            <input
              type="text"
              id="Vehicle"
              value={Vehicle}
              onChange={(event) => setVehicle(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year of manufacture</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(event) => setYear(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input
              type="text"
              id="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Engine">Engine Number:</label>
            <input
              type="Text"
              id="Engine"
              value={Engine}
              onChange={(event) => setEngine(event.target.value)}
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

