//Test Change
document.getElementById('currentDate').textContent = `${
    weekday[d.getDay()]
  }, ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
  
  document.getElementById('lastmod').textContent = document.lastModified;
  