<script>
    // Seleziona il bottone dell'icona del menu (hamburger) e la lista dei link del menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Aggiungi l'evento al clic sull'icona
    menuToggle.addEventListener('click', () => {
        // Aggiungi o rimuovi la classe 'active' per aprire/chiudere il menu
        navLinks.classList.toggle('active');
    });
</script>
