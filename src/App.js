// import './App.css';
// import Profileform from '../src/Components/Profileform'

// function App() {
//   return (
//     <div>
//        <Profileform/>
//     </div>
//   );
// }

// export default App;
import "../src/styles.css";
import React, { useState } from "react";
import image1 from "../src/images/image1.jpg";
import FormikForm from "../src/Components/FormikForm";

// change this data to the database one
function App() {
  const [fields, updateFields] = useState({
    firstName: "Sahithya",
    lastName: "H S",
    userName: "Sahithya Sathish",
    email: "hssahithya.com"
  });

  return (
    <div className="container">
      <div className="side">
        <img src={image1} alt="profileimg"/>
        <h3>Upload Photo </h3> <br />
        <input type="file" />
        <button type="submit" className="btn">Upload</button>
      </div>
      <div className="main_data">
        <FormikForm fields={fields} updateFields={updateFields} />
      </div>
    </div>
  );
}

export default App;

