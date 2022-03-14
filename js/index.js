//const last_updated = document.querySelector("#last_updated");
let last_updated = document.getElementById("last_updated");

//year.textContent = new Date().getFullYear();
last_updated.innerHTML = document.lastModified;