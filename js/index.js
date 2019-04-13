// Your code goes here
const navLinks = document.querySelectorAll('.nav-link')
console.log(navLinks);

navLinks.forEach((navLink) => {
  navLink.addEventListener('mouseover', function(event){
      event.target.classList.add('nav-active');
  });
  navLink.addEventListener('mouseout', function(event){
  event.target.classList.remove('nav-active')
})
});
