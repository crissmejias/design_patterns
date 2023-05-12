const red_button = document.querySelector('.red_button');
red_button.addEventListener('click', () => {
    singletonCounter.increment();
    paragraph.innerHTML = `<p>Contando: ${singletonCounter.getCount()}</p>`
})