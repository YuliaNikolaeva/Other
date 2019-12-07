// 'use strict'

// const big = document.querySelector('#pool');
// const small = document.querySelector('#persone');



// const toStep = ({clientY, clientX}) => {
//   // small.style.top = clientY + 'px';
//   // small.style.left = clientX + 'px';

// }

// big.addEventListener('click', toStep);
//------------------------------
// setInterval(foo, time);
//------------------------------

const big = document.querySelector('#pool');
const small = document.querySelector('#persone');

let top = 0;
let i = 0;


const getTopAndLeft = ({clientY}) => {
  top = clientY;
  let stepAnimation = 0;

 console.log('top', top);
 console.log('i', i)

  i++;

 if (i < top) {
  stepAnimation = setTimeout(getTopAndLeft, 200)
  small.style.top = i + 1 + 'px';

 } else {
  clearInterval(stepAnimation);
 }

};

big.addEventListener('click', getTopAndLeft);