const noQuery = document.getElementById('container');

const withQuery = document.querySelector('#container');

const secondList = document.querySelectorAll('.second');

const thirdList = document.querySelector('ol .third');

containerQuery.textContent = "Hello!";

const footerDiv = document.querySelector('.footer');
footerDiv.classList.add('main');

footerDiv.classList.remove('main');

const newLi = document.createElement('li');

newLi.textContent = 'four';

const ulElement = document.querySelector('ul');
ulElement.appendChild(newLi);

const olListItems = document.querySelectorAll('ol li');
olListItems.forEach(item => {
    item.style.backgroundColor = 'green';
});

const footerToRemove = document.querySelector('.footer');
footerToRemove.remove();
