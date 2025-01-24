import React from "react";

function DisplayName() {
  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fname = e.target.fname.value;
          const lname = e.target.lname.value;
          const fullName = fname + " " + lname;
          document.querySelector(".fullName").innerHTML = `Full Name: ${fullName}`;
        }}
      >
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" name="fname" required />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p className="fullName">{""}</p>
    </div>
  );
}

export default DisplayName;