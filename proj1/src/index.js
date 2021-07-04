import isEmail from 'validator/lib/isEmail'    
import tripleMe from './tripleMe'

console.log(isEmail('john@example.com'))

console.log(tripleMe(50))

document.querySelector("h1").innerText = "It is project 1 !";

if (module.hot) module.hot.accept()