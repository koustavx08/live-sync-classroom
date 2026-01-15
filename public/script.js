const socket = io();
const wall = document.getElementById("wall");

function sendMessage() {
  const input = document.getElementById("message");

  if (input.value.trim() !== "") {
    socket.emit("new-message", input.value);
    input.value = "";
  }
}

socket.on("update-wall", (message) => {
  const li = document.createElement("li");
  li.textContent = message;
  wall.appendChild(li);
});
