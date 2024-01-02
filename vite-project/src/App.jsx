import React from "react";

function App() {
  return (
    <>
      <div class="container">
        <>
          <div class="todo">
            <input
              class="TDvalue"
              type="text"
              placeholder="(empty)"
              value="Go for class"
            />
            <input class="TDbox" type="checkbox" />
          </div>
          <div class="todo">
            <input
              class="TDvalue"
              type="text"
              placeholder="(empty)"
              value="Go to the department"
            />
            <input class="TDbox" type="checkbox" />
          </div>
          <div class="todo">
            <input
              class="TDvalue"
              type="text"
              placeholder="(empty)"
              value="Pack my stuff"
            />
            <input class="TDbox" type="checkbox" />
          </div>
          <div class="todo">
            <input
              class="TDvalue"
              type="text"
              placeholder="(empty)"
              value="Call Nk"
            />
            <input class="TDbox" type="checkbox" />
          </div>
          <div class="todo">
            <input
              class="TDvalue"
              type="text"
              placeholder="(empty)"
              value="Be home"
            />
            <input class="TDbox" type="checkbox" />
          </div>
        </>
      </div>
    </>
  );
}

export default App;
