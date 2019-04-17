// Your code goes here

// ===== mouseover & mouseout =====

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

// ===== mousedown & mouseup =====
// const imageEffects = document.querySelectorAll('.img-content')
//
// imageEffect.addEventListener('mousedown', function(event){
//   event.target.classList.add('img-mousedown');
// });
// imageEffect.addEventListener('mouseup', function(event){
//   event.target.classList.remove('img-mousedown');
// });

const imageEffects = document.querySelectorAll('div img')

imageEffects.forEach((imageEffect) => {
  imageEffect.addEventListener('mousedown', function(event){
      event.target.classList.add('img-mousedown');
  });
  imageEffect.addEventListener('mouseup', function(event){
  event.target.classList.remove('img-mousedown')
})
});

// ===== wheel =====


const pElements = document.querySelectorAll('p');
console.log(pElements);

pElements.forEach((pElement) => {
  pElement.addEventListener('wheel', function(event){
      event.target.classList.add('wheel-effects');
  });
  pElement.addEventListener('mouseout', function(event){
  event.target.classList.remove('wheel-effects')
})
});

// ===== click & mouseleave =====

const btns = document.querySelectorAll('p');
console.log(btns);

pElements.forEach((btn) => {
  btn.addEventListener('click', function(event){
    event.target.classList.add('mouse-clicked');
  });
  btn.addEventListener('mouseleave', function(event){
    event.target.classList.remove('mouse-clicked');
  });
});

// ===== dblclick =====


const rainbow = document.querySelector('html'),
colors = ['purple', 'yellow', 'orange', 'salmon', 'hotpink',  'white'];

rainbow.ondblclick = function () {
  color = colors.shift();
  colors.push(color);

  rainbow.style.backgroundColor = color;
};

// ===== keydown & keyup =====

const keys = document.querySelectorAll('div');
console.log(keys);

addEventListener('keydown', e => {
  if (e.keyCode === 13)
  document.body.style.background = 'Purple';
addEventListener('keyup', function(event) {
  if (event.keyCode == 13)
    document.body.style.background = 'White';
});
})
