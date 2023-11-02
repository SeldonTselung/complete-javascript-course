'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => 
  btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////

console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document);

const header = document.querySelector('.header');

const selections = document.querySelectorAll(".section");
console.log(selections);

const section3 = document.getElementById('section--3');
console.log(section3);

const allButtonsTag = document.getElementsByTagName('button'); //tag name needs no period.
console.log(allButtonsTag);

const buttonsClass = document.getElementsByClassName('btn');
console.log(buttonsClass);

//creating and inserting elements
const greeting = document.createElement('div');

greeting.classList.add('cookie-message');

greeting.textContent = "Welcome to my site!"; 

greeting.innerHTML = 
'Welcome to my site! <button class="btn btn--close-cookie"> press </button>';

header.prepend(greeting); //1st child node of header 
header.append(greeting); // gets inserted once, because the element got moved.
//dom element can only exist at 1 place at 1 time.last child node of header.
header.prepend(greeting.cloneNode(true)); //copied the element and prepends that copy

header.before(greeting); //sibling to header
header.after(greeting); //sibling to header

//.insertAdjacentHTML(position, text)

//delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', 
    function() {
      greeting.remove();
});

//styles, attributes & classes
greeting.style.backgroundColor = '#37383d';
greeting.style.width = '120%';

console.log(greeting.style.height); // we cannot access styles that are not set using inline commands
console.log(getComputedStyle(greeting).height); //this func gives a list of properties to access

greeting.style.height = Number.parseFloat(getComputedStyle(greeting).height, 10) + 20 + 'px' ;

document.documentElement.style.setProperty(
  '--color-primary', 'orangered');

//attributes (className, id, src, alt, title, href, lang, )

const logo = document.querySelector('.nav__logo');

//to access std attributes
console.log(logo.alt);
console.log(logo.src); //absolute source of the logo
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'; //to set attributes

//non-standard attributes
console.log(logo.designer); // does not work because it's not a std attribute
console.log(logo.getAttribute('designer')); //how non-std attributes are accessed
console.log(logo.setAttribute('company', 'Bankist'));
console.log(logo.getAttribute('src')); //relative source

//custom data attributes data-whateverWeWant= " " in css attributes
console.log(logo.dataset.versionNumber); //to access from dataset object

//classes
logo.classList.add('c', 'j'); //add multiple classes
logo.classList.remove('c', 'j'); //remove multiple classes
logo.classList.replace('c', 'a');
logo.classList.toggle('c');
logo.classList.contains('c'); //returns a boolean

//Don't use because it will overwrite all the existing classes
logo.className = 'jonas';