import _ from 'lodash';
import './style.css';


function footer() {
    const footer = document.createElement('footer');

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
    home.classList.add('home');
    home.setAttribute('id','clickHome');
    home.textContent="Home";
    const menu=document.createElement('li');
    menu.classList.add('menu');
    menu.setAttribute('id','clickMenu');
    menu.textContent="Menu";
    const contact=document.createElement('li');
    contact.classList.add('contact');
    contact.setAttribute('id','clickContact');
    contact.textContent="Contact";
    const about=document.createElement('li');
    about.classList.add('about');
    about.setAttribute('id','clickAbout');
    about.textContent="About";

    

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);
    navBar.appendChild(about);

    var clickHome = document.getElementById("clickHome");
    clickHome.onclick = function(event) {
        clickHome.classList.add('active');
        clickMenu.classList.remove('active');
        clickContact.classList.remove('active');
        clickAbout.classList.remove('active');
      createHome();
    }

    var clickMenu = document.getElementById("clickMenu");
    clickMenu.onclick = function(event) {
        clickHome.classList.remove('active');
        clickMenu.classList.add('active');
        clickContact.classList.remove('active');
        clickAbout.classList.remove('active');
      createMenu();
    }
    var clickContact = document.getElementById("clickContact");
    clickContact.onclick = function(event) {
        clickHome.classList.remove('active');
        clickMenu.classList.remove('active');
        clickContact.classList.add('active');
        clickAbout.classList.remove('active');
      createContact();
    }
    var clickAbout = document.getElementById("clickAbout");
    clickAbout.onclick = function(event) {
        clickHome.classList.remove('active');
        clickMenu.classList.remove('active');
        clickContact.classList.remove('active');
        clickAbout.classList.add('active');
      createAbout();
    }

}
createNavBar();

//nav

const description = document.createElement('div');
description.classList.add('description');
content.appendChild(description);
var e = document.querySelector(".description");
  

function createHome(){
    e.innerHTML = "";
    const navIcon=document.querySelector('.home');
    navIcon.classList.add('active'); 

    const title=document.createElement('div');
    title.classList.add('title');
    title.textContent="Welcome to my resto";
    description.appendChild(title);

    const para=document.createElement('p');
    para.classList.add('para');
    para.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor vitae pulvinar varius. Nullam sed quam sed ante tincidunt ullamcorper porta a tortor. Integer sit amet posuere nunc.";
    description.appendChild(para);

}
function createMenu(){
    e.innerHTML = "";
    //const navIcon=document.querySelector('.menu');
   // navIcon.classList.add('active'); 

    const menuTitle=document.createElement('div');
    menuTitle.classList.add('menu');
    menuTitle.textContent="Menu";
    description.appendChild(menuTitle);
    //title menu

    const hotCoffee=document.createElement('div');
    hotCoffee.classList.add('hotCoffee');
    hotCoffee.textContent="Hot Coffee";
    description.appendChild(hotCoffee);

        const hotCoffeeList=document.createElement('div');
        hotCoffeeList.classList.add('hotCoffeeList');
        hotCoffee.appendChild(hotCoffeeList);

            const hotCoffeeItem=document.createElement('div');
            hotCoffeeItem.textContent="Name:";
            hotCoffeeList.appendChild(hotCoffeeItem);

            const hotCoffeeItemPrice=document.createElement('div');
            hotCoffeeItemPrice.textContent="Price:";
            hotCoffeeList.appendChild(hotCoffeeItemPrice);

            const Latte=document.createElement('div');
            Latte.textContent="Latte";
            hotCoffeeList.appendChild(Latte);

            const LattePrice=document.createElement('div');
            LattePrice.textContent="$2.10";
            hotCoffeeList.appendChild(LattePrice);

            const Americano=document.createElement('div');
            Americano.textContent="Americano";
            hotCoffeeList.appendChild(Americano);
            
            const AmericanoPrice=document.createElement('div');
            AmericanoPrice.textContent="$1.90";
            hotCoffeeList.appendChild(AmericanoPrice);

            const Espresso=document.createElement('div');
            Espresso.textContent="Espresso";
            hotCoffeeList.appendChild(Espresso);
            
            const EspressoPrice=document.createElement('div');
            EspressoPrice.textContent="$2.00";
            hotCoffeeList.appendChild(EspressoPrice);

            const Mocha=document.createElement('div');
            Mocha.textContent="Mocha";
            hotCoffeeList.appendChild(Mocha);
            
            const MochaPrice=document.createElement('div');
            MochaPrice.textContent="$2.50";
            hotCoffeeList.appendChild(MochaPrice);

            const Cappuccino=document.createElement('div');
            Cappuccino.textContent="Cappuccino";
            hotCoffeeList.appendChild(Cappuccino);
            
            const CappuccinoPrice=document.createElement('div');
            CappuccinoPrice.textContent="$2.30";
            hotCoffeeList.appendChild(CappuccinoPrice);


    //hot coffees

    const icedCoffee=document.createElement('div');
    icedCoffee.classList.add('icedCoffee');
    icedCoffee.textContent="Iced Coffee";
    description.appendChild(icedCoffee);

        const icedCoffeeList=document.createElement('div');
        icedCoffeeList.classList.add('hotCoffeeList');
        icedCoffee.appendChild(icedCoffeeList);

            const icedCoffeeItem=document.createElement('div');
            icedCoffeeItem.textContent="Name:";
            icedCoffeeList.appendChild(icedCoffeeItem);

            const icedCoffeeItemPrice=document.createElement('div');
            icedCoffeeItemPrice.textContent="Price:";
            icedCoffeeList.appendChild(icedCoffeeItemPrice);

            const IcedCoffee=document.createElement('div');
            IcedCoffee.textContent="Iced Coffee";
            icedCoffeeList.appendChild(IcedCoffee);

            const IcedCoffeePrice=document.createElement('div');
            IcedCoffeePrice.textContent="$2.05";
            icedCoffeeList.appendChild(IcedCoffeePrice);

            const IcedEspresso=document.createElement('div');
            IcedEspresso.textContent="Iced Espresso";
            icedCoffeeList.appendChild(IcedEspresso);

            const IcedEspressoPrice=document.createElement('div');
            IcedEspressoPrice.textContent="$2.15";
            icedCoffeeList.appendChild(IcedEspressoPrice);

            const Frappuccino=document.createElement('div');
            Frappuccino.textContent="Frappuccino";
            icedCoffeeList.appendChild(Frappuccino);

            const FrappuccinoPrice=document.createElement('div');
            FrappuccinoPrice.textContent="$2.95";
            icedCoffeeList.appendChild(FrappuccinoPrice);


    //iced coffees
    const desert=document.createElement('div');
    desert.classList.add('desert');
    desert.textContent="Deserts";
    description.appendChild(desert);

        const desertList=document.createElement('div');
        desertList.classList.add('hotCoffeeList');
        desert.appendChild(desertList);

            const desertItem=document.createElement('div');
            desertItem.textContent="Name:";
            desertList.appendChild(desertItem);

            const desertPrice=document.createElement('div');
            desertPrice.textContent="Price:";
            desertList.appendChild(desertPrice);

            const chocoCookies=document.createElement('div');
            chocoCookies.textContent="Chocolate Cookies";
            desertList.appendChild(chocoCookies);

            const chocoCookiesPrice=document.createElement('div');
            chocoCookiesPrice.textContent="$1.50";
            desertList.appendChild(chocoCookiesPrice);

            const pancake=document.createElement('div');
            pancake.textContent="Pancakes";
            desertList.appendChild(pancake);

            const pancakePrice=document.createElement('div');
            pancakePrice.textContent="$1.10";
            desertList.appendChild(pancakePrice);

            const donut=document.createElement('div');
            donut.textContent="Chocolate Donut";
            desertList.appendChild(donut);

            const donutPrice=document.createElement('div');
            donutPrice.textContent="$1.75";
            desertList.appendChild(donutPrice);
}
function createContact(){
    
}
createHome();
//createMenu()



