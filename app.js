const btn = document.getElementById("add");
const tasks = document.getElementById("tasks");
const input = document.getElementById("input");
btn.addEventListener("click", printVal);
function printVal() {
  const value = input.value;
  tasks.innerHTML = `<p>${value}</p>`;
}
