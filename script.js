let cardOne = document.querySelector('.card.one');
let cardTwo = document.querySelector('.card.two');
let cardThree = document.querySelector('.card.three');
let buttonOne = document.querySelector('.button.one');
let buttonTwo = document.querySelector('.button.two');
let buttonthree = document.querySelector('.button.three');

buttonOne.addEventListener('click', ()=>{
    cardOne.classList.toggle('active');
    cardOne.classList.toggle('inactive');
    cardTwo.classList.toggle('active');
    cardThree.classList.remove('inactive');
})

buttonTwo.addEventListener('click', ()=>{
    cardTwo.classList.toggle('active');
    cardTwo.classList.toggle('inactive');
    cardThree.classList.toggle('active');
})

buttonthree.addEventListener('click', ()=>{
    cardThree.classList.toggle('active');
    cardThree.classList.toggle('inactive');
    cardOne.classList.toggle('inactive');
    cardOne.classList.toggle('active');
    cardTwo.classList.toggle('inactive');
})