const ul = document.getElementById("myLinks");

const bar = document.querySelector('.navbar-nav-collapse')

bar.addEventListener('click', () => {
  console.log("clicked")
  if (ul.style.display === "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
})