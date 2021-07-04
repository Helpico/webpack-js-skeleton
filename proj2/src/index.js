import isEmail from 'validator/lib/isEmail'    
import tripleMe from './tripleMe'

console.log(isEmail('john'))

console.log(tripleMe(10))

document.querySelector("h1").innerText = "This is big Proj 2";

if (module.hot) module.hot.accept()