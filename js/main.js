const menuEl = document.querySelector('.menu');
const menuBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu__close');

menuBtn.addEventListener('click', () => {
    menuEl.classList.add('menu-show');
    document.body.classList.add('no-scroll');
})

menuClose.addEventListener('click', ()=> {
    menuEl.classList.remove('menu-show');
    document.body.classList.remove('no-scroll');
})


/** ACCORDION  */
let accordionBtn = document.querySelectorAll('.accordion__item');
let descriptionEl = document.querySelectorAll('.accordion__description')

console.log(accordionBtn);
console.log(accordionBtn.length);

accordionBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('accordion__open')
    }) 
})

// let showTeam = document.querySelector('#team');
// let allTeam = document.querySelectorAll('.team__item');

// showTeam.addEventListener('click', function() {
//     allTeam.forEach(person => {
//         if(person.style.display !== 'block') {
//             person.classList.add('show');
//         }
//     })
// })