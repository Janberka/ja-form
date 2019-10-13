import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Form from "../src/lib/form";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function App() {
  const [data, setData] = useState(false);
  const submitForm = async data => {
    await wait(Math.round(Math.random() * 500) + 500);
    setData(false);
    if (Math.random() < 0.1) {
      throw Error("An error occured");
    }
    setData(data);
  };

  return (
    <div className="App">
      <h1>Easy React Forms</h1>
      <Form action={submitForm}>
        {({ error, loading }) => (
          <fieldset disabled={loading}>
            <div>{error && error.message}</div>
            <input name="username" />
          </fieldset>
        )}
      </Form>
      <pre>{JSON.stringify(data, null, " ")}</pre>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
