// Mixing vanilla w jquery
var navBarDom = `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html">
    <img src="img/logo.png" alt="ck-boba" width="45px" height="45px">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</div>
     
<div class="collapse navbar-collapse" id="navbarColor01">
  <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="about.html">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="project.html">Project</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://ckunakom.github.io/resume/" target="_blank">Resume</a> 
    </li>
  </ul>
</div>
</nav>`;

document.getElementById("repeat-nav-bar").innerHTML = navBarDom;

// put active class on the current page
$(function () {
  var path = window.location.pathname.split("/").pop();
  console.log(path)
  if (path == "") {
    $('#navbarColor01 li:first')
    .addClass("active");
  }

  else {
  $('#navbarColor01 li a[href="' + path + '"]')
    .parent()
    .addClass("active");
  }
});
