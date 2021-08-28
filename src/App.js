import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";

function App() {
  return <Form onSubmit={values => fetch('https://b1563w8kug.execute-api.eu-west-1.amazonaws.com/dev', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;