document.querySelectorAll('.nodo-html').forEach(nodo => {
    nodo.addEventListener('click', e => {
        e.preventDefault();

        const link = nodo.getAttribute('href');

        nodo.classList.add('expand');

        setTimeout(() => {
            window.location.href = link;
        }, 700);
    });
});
