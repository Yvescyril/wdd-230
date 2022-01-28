const year = document.getElementById("year");
let last_updated = document.getElementById("lastModified");

year.textContent = new Date().getFullYear();
last_updated = new Date (document.lastModified);