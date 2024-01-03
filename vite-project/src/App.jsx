import React from "react";

let itemList = [];

function addItem(item) {
  if (!itemList.includes(item)) {
    itemList.push(item);
    console.log(`${item} added successfully.`);
  } else {
    console.log(`${item} is already in the list.`);
  }
}
addItem();
function App() {
  <button id="addButton">Add Task</button>;

  fetch("localhost:8000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Todo - List),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });

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
