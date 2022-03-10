const color = document.querySelector('#color');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear')
const label = document.querySelector('.range-label');
const range = document.querySelector('#range');
const main = document.querySelector('.main');
const mode = document.querySelector('.mode');

let colorValue = color.value;
let changingColor= false;
let colors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];


for(let i = 0; i <= (range.min * range.min); i++){
  const i = document.createElement('div');
  main.append(i)
}

function changeBgColor(element){
  element.setAttribute('style', 'background-color: orange; color:black; transition-duration: 0.3s');
}
function returnBgColor(element){
  element.setAttribute('style', 'background-color: transparent; color:white; transition-duration: 0.3s')
}
color.addEventListener('change', function(){
  mode.textContent = 'Mode: Color'
  colorValue = color.value;
  changingColor= false;
  returnBgColor(eraser);
  returnBgColor(rainbow);
})

eraser.addEventListener('click', function(){
  colorValue = '#FFFFFF';
  mode.textContent = 'Mode: Eraser'
  changingColor= false;
  changeBgColor(eraser);
  returnBgColor(rainbow);
})


rainbow.addEventListener('click', function() {
  changingColor=true;
  mode.textContent = 'Mode: Rainbow';
  changeBgColor(rainbow);
  returnBgColor(eraser);
})



function changeColor(){
  const divs = main.querySelectorAll('div');
  divs.forEach((div) => div.addEventListener('mouseover', function(){
    if(changingColor === true){
      colorValue = colors[Math.floor(Math.random() * 7)];
    }
    this.style.backgroundColor = colorValue;
  }))

  clear.addEventListener('click', function(){
    divs.forEach((div) => div.style.backgroundColor = '#FFFFFF')
  })
}

changeColor()

range.addEventListener('change', function(){
  main.innerHTML = '';
  const value = range.value;
  label.textContent = `${value}X${value}`;

  main.setAttribute('style', `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr)`);
  
  for(let i = 0; i <= (value * value); i++){
    const i = document.createElement('div');
    
    main.append(i)
  }

  changeColor()
})

