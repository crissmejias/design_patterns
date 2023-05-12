const blue_button = document.querySelector('.blue_button');
blue_button.addEventListener('click', () => {
    singletonCounter.increment();
    paragraph.innerHTML = `<p>Contando: ${singletonCounter.getCount()}</p>`

})