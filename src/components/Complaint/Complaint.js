import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Complaint.css";
import { Link } from "react-router-dom";
const ComplaintForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [complaintType, setComplaintType] = useState("");
    const [complaintDetails, setComplaintDetails] = useState("");

   
let navigate=useNavigate()
let gotoTech=()=>{
 navigate("/Services");
}  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the form data
      console.log("Form submitted!");
    };
  
    return (
      <form className="complaint-form mt-5 p-2 " onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="complaintType">Complaint Type:</label>
          <select
            id="complaintType"
            value={complaintType}
            onChange={(event) => setComplaintType(event.target.value)}
          >
            <option value="">Select a complaint type</option>
            <option value="Infrastructure problems">Infrastructure problems</option>
            <option value="Corruption and unethical practices">Corruption and unethical practices</option>
            <option value="Law and order issues">Law and order issues</option>
            <option value="Environmental concerns">Environmental concerns</option>
            <option value="Health and education issues">Health and education issues</option>
            <option value="Social justice">Social justice</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mt-3">
          <label htmlFor="complaintDetails">Complaint Details:</label>
          <textarea
            id="complaintDetails"
            value={complaintDetails}
            onChange={(event) => setComplaintDetails(event.target.value)}
          />
        </div>
        <Link className='nav-item' to="/Home">
             <button  className='btn btn-success mt-3 fs-5 mb-3'   onClick={gotoTech}>SUBMIT</button>
          </Link>
      </form>
    );
  };
  
  export default ComplaintForm;
  
