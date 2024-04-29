const nav = document.getElementById("nav");
const navHTML = `<nav class="navbar  bg-black navbar-expand-lg navbar-light pb-md-1  pb-5 bg-black " style="background-color: #f7e9d9;" id="navbar">
  
<div class="container-fluid position-relative">

    <a class="navbar-brand position-absolute top-0 start-50 translate-middle-x" href="index.html">
    <img src="image/logo-big.svg" stalt="Logo" width="100" height="" >
  </a>


  <button class="navbar-toggler position-absolute top-0 end-0 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars text-black btn-gradient-pink-purple"></i>
  </button>


  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <a class="nav-link text-black" href="index.html"><i class="fa-brands fa-instagram"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-black" href="#"><i class="fa-brands fa-facebook"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-black" href="#"><i class="fa-brands fa-x-twitter"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-black" href="#"><i class="fa-brands fa-pinterest"></i></i></a>
      </li>
    </ul>


    <div class="d-flex">
      <button class="btn text-black me-2" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
      <a href="pageConnexion.html" class="btn btn-outline rounded-pill p-2 mt-1 btn-gradient-pink-purple">connexion</a>
    </div>
  </div>
</div>
</nav>`;
nav.innerHTML = navHTML;