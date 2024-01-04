import React from "react";

let itemList = [];

function addItem() {
  const todoList = {
    tasks: itemList,
  };

  fetch("http://localhost:8000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoList),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}

itemList.push({ task: "Bath", id: 1 });
itemList.push({ task: "Dress", id: 2 });

addItem();

function App() {
  <button id="addButton" onClick={addItem}>
    Add Task
  </button>;

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
