document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  let inputBox = document.querySelector("#inputBox");
  let listContainer = document.querySelector("#listContainer");

  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.className = "task-item";

    let taskText = document.createElement("span");
    taskText.className = "taskName";
    taskText.innerText = inputBox.value;

    let taskImage = document.createElement("img");
    taskImage.src = "./images/unchecked.png";
    taskImage.className = "image";

    let crossBtn = document.createElement("span");
    crossBtn.id = "cross";
    crossBtn.innerHTML = '<i class="ri-close-fill"></i>';

    li.appendChild(taskImage);
    li.appendChild(taskText);
    li.appendChild(crossBtn);
    listContainer.appendChild(li);

    inputBox.value = "";

    taskImage.addEventListener("click", function () {
      taskImage.classList.toggle("active");

      if (taskImage.classList.contains("active")) {
        taskImage.src = "./images/checked.png";
        taskText.style.textDecoration = "line-through";
      } else {
        taskImage.src = "./images/unchecked.png";
        taskText.style.textDecoration = "";
      }
    });

    crossBtn.addEventListener("click", function () {
      li.remove();
    });
  }
}
