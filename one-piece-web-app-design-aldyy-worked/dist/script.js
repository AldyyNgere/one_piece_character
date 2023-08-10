// elements 
const navbar = document.querySelector('.navbar');
const displayYear = document.getElementById('year');
const menu = document.querySelectorAll('.menu-box li a');

// change navbar bg on scroll 
document.addEventListener('scroll', () =>{
  if(window.scrollY > 50){
    navbar.classList.add('cg-bg');
  }else{
    navbar.classList.remove('cg-bg');
  }
})

// Update Year on footer 
let date = new Date();
let year = date.getFullYear();
window.onload = () =>{
  displayYear.textContent = year;
}

// Target menu 
const targetMenu = (e) =>{
  document.querySelector('.menu-active').classList.remove('menu-active');
  e.target.classList.add('menu-active');
}
menu.forEach(e => e.addEventListener('click', targetMenu));