import React from "react";
import { Header } from "semantic-ui-react";
import DashboardTable from "./DashboardTable.js";
import Form from "./Form.js"
import "./App.css";

function App() {
  return (
        <div className="App">
      <header className="App-header">
          <Header as="h3">Payment Data</Header>
      </header>
      <div className="App-form">
          <Form />
      </div>
      <div className="App-main">
          <DashboardTable />
      </div>
    </div>
  );
}

export default App;
