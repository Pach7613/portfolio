document.querySelectorAll('.nodo').forEach(nodo => {
    nodo.addEventListener('click', e => {
        e.preventDefault();

        const link = nodo.dataset.link;
        const rect = nodo.getBoundingClientRect();
        const circle = document.getElementById('circle-transition');

        const size = Math.max(window.innerWidth, window.innerHeight) * 2;

        circle.style.width = circle.style.height = size + 'px';
        circle.style.left =
            rect.left + rect.width / 2 - size / 2 + 'px';
        circle.style.top =
            rect.top + rect.height / 2 - size / 2 + 'px';

        requestAnimationFrame(() => {
            circle.style.transform = 'scale(1)';
        });

        setTimeout(() => {
            window.location.href = link;
        }, 800);
    });
});
