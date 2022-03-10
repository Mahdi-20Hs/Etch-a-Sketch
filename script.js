const color = document.querySelector('#color');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear')
const label = document.querySelector('.range-label');
const range = document.querySelector('#range');
const main = document.querySelector('.main');
const mode = document.querySelector('.mode');

let colorValue = color.value;

color.addEventListener('change', function(){
  mode.textContent = 'Mode: Color'
  colorValue = color.value;
  x = false
})

eraser.addEventListener('click', function(){
  colorValue = '#FFFFFF';
  mode.textContent = 'Mode: Eraser'
  x = false;
})

let x = false;
let y = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];

rainbow.addEventListener('click', function() {
  x =true;
  mode.textContent = 'Mode: Rainbow'
})



for(let i = 0; i <= (16 * 16); i++){
  const i = document.createElement('div');
  
  main.append(i)

}


range.addEventListener('change', function(){
  main.innerHTML = '';
  const value = range.value;
  label.textContent = `${value}X${value}`;

  main.setAttribute('style', `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr)`);
  
  for(let i = 0; i <= (value * value); i++){
    const i = document.createElement('div');
    
    main.append(i)
  }

  const divs = main.querySelectorAll('div');

divs.forEach((div) => div.addEventListener('mouseover', function(){
  if(x === true){
    colorValue = y[Math.floor(Math.random() * 7)];
  }
  this.style.backgroundColor = colorValue;

}))
clear.addEventListener('click', function(){
  divs.forEach((div) => div.style.backgroundColor = '#FFFFFF')
})
})

const divs = main.querySelectorAll('div');

divs.forEach((div) => div.addEventListener('mouseover', function(){
  if(x === true){
    colorValue = y[Math.floor(Math.random() * 7)];
  }
  this.style.backgroundColor = colorValue;

}))

clear.addEventListener('click', function(){
  divs.forEach((div) => div.style.backgroundColor = '#FFFFFF')
})
