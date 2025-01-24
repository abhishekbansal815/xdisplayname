import React, { useState } from "react";

function DisplayName() {
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fname = e.target.fname.value.trim();
    const lname = e.target.lname.value.trim();
    
    if (fname && lname) {
      setFullName(`${fname} ${lname}`);
    } else {
      setFullName("");
    }
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" name="fname" required />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" required />
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <p className="fullName">
          Full Name: {fullName}
        </p>
      )}
    </div>
  );
}

export default DisplayName;