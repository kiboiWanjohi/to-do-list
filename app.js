var list = document.getElementById("todolist");
var addBtn = document.getElementById("btn");
var addInput = document.getElementById("input");
var i = document.getElementById("i");

function addToDo() {
  var text = addInput.value;

  if (text === "") {
    return;
  }
  var li = document.createElement("li");
  var p = document.createElement("p");

  p.innerHTML = `${text} <i id = "i" class="fa-solid fa-circle-check"></i>`;
  li.appendChild(p);
  list.appendChild(li);
  text = "";
}
addBtn.addEventListener("click", addToDo);
addInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addToDo();
  }
});
list.addEventListener("click", function (event) {
  removeToDo(event.target);
});
function removeToDo(removeElement) {
  removeElement.parentElement.remove();
}
