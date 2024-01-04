import React from "react";

let itemList = [];
function handleClick(checkbox) {
  addItem(checkbox);
  if (checkbox.checked) {
    itemList.push(checkbox.value);
  } else {
    let index = itemList.indexOf(checkbox.value);
  }
  if (index !== -1) {
    itemList.splice(index, 1);
  }
}
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
  return (
    <>
      <button id="addButton" onClick={addItem}>
        Add Task
      </button>
      <div class="container">
        <>
          <div class="todo">
            <input
              class="TDvalue"
              type="checkbox"
              name="task"
              value="task1"
              id="task1"
              onClick={() => handleClick(this)}
            />
            <label class="TDbox" htmlFor="task1">
              Task 1
            </label>
          </div>
          <div class="todo">
            <input
              class="TDvalue"
              type="checkbox"
              name="task"
              value="task2"
              id="task2"
              onClick={() => handleClick(this)}
            />
            <label class="TDbox" htmlFor="task2">
              Task 2
            </label>
          </div>
          <div class="todo">
            <input
              class="TDvalue"
              type="checkbox"
              name="task"
              value="task3"
              id="task3"
              onClick={() => handleClick(this)}
            />
            <label class="TDbox" htmlFor="task3">
              Task 3
            </label>
          </div>
          <div class="todo">
            <input
              class="TDvalue"
              type="checkbox"
              name="task"
              value="task4"
              id="task4"
              onClick={() => handleClick(this)}
            />
            <label class="TDbox" htmlFor="task4">
              Task 4
            </label>
          </div>
          <div class="todo">
            <input
              class="TDvalue"
              type="checkbox"
              name="task"
              value="task5 "
              id="task5"
              onClick={() => handleClick(this)}
            />
            <label class="TDbox" htmlFor="task5">
              Task 5
            </label>
          </div>
        </>
      </div>
    </>
  );
}

export default App;
