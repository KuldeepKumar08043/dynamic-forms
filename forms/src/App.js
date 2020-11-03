import React, { useState } from "react";
import DynamicForm from "../../src";
import { formData } from "./data/formData";

function App() {
  const [validJsonData, setValidJsonData] = useState(formData);

  const handleSubmission = (val) => {
    console.log(JSON.parse(val));
  };

  const formStyle = {
      margin: '0 auto',
      width: '340px'
  }

  return (
    <div style={formStyle}>
      <h2>Dynamic Form using Json</h2>
      <DynamicForm fields={validJsonData} cbSubmit={handleSubmission} />
    </div>
  );
}

export default App;
