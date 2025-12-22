document.querySelectorAll('[data-transition]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const url = link.href;

        // bloquear más clics
        if (document.body.classList.contains('is-transitioning')) return;

        document.body.classList.add('is-transitioning');

        // expandir el círculo clicado
        link.classList.add('expand');

        // esperar a que termine la animación
        setTimeout(() => {
            window.location.href = url;
        }, 800);
    });
});
