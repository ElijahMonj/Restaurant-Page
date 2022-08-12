import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
  }
  const content = document.querySelector('#content'); 
function createNavBar(){
    const container=document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const img=document.createElement('img');
    img.src = "logo.png";
    container.appendChild(img);

    const navBar=document.createElement('ul');
    
    container.appendChild(navBar)
    
    const home=document.createElement('li');
    home.textContent="Home";
    const menu=document.createElement('li');
    menu.textContent="Menu";
    const contact=document.createElement('li');
    contact.textContent="Contact";
    const about=document.createElement('li');
    about.textContent="About";
    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);
    navBar.appendChild(about);
}
createNavBar();

//nav


const description = document.createElement('div');
description.classList.add('description');
content.appendChild(description);

function createHome(){

    const title=document.createElement('div');
    title.classList.add('title');
    title.textContent="Welcome to my resto";
    description.appendChild(title);
}
createHome()


