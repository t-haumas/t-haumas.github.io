const secondButton = document.querySelector("h6");
secondButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('a').style.background = 'green';
})