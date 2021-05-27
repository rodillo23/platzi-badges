/* const element = document.createElement('h1')
element.innerText = 'Hello Rodo!!'

const container = document.getElementById('app')
container.appendChild(element)

 */
import React from 'react';
import ReactDOM from 'react-dom'


const element = <h1>Hello, Platzi badges from React</h1>
const container = document.getElementById('app')

ReactDOM.render(element, container)