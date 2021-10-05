import React, { useState } from "react";
import ReactDOM from "react-dom";
import MonacoEditor from 'react-monaco-editor'

const code =
`
// Define Typescript Interface Employee
interface Employee {
    firstName: String;
    lastName: String;
    contractor?: Boolean;
}
// Use Typescript Interface Employee. 
// This should show you an error on john 
// as required attribute lastName is missing
const john:Employee = {
    firstName:"John",
    // lastName:"Smith"
    // contractor:true
}
`

function App() {

  // constructor(props){
  //   super(props)
  //   this.state = { code }
  // }

onChange(newValue, e) {
    //  console.log('onChange', newValue, e);
}


    return (
      <MonacoEditor
      width="600"
      height="800"
      language="javascript"
      theme="vs-dark"
      defaultValue='//'
      value={code}
      onChange={this.onChange}/>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
