document.addEventListener('DOMContentLoaded', () => {
    const sunIcon = document.getElementById('sun');
    const moonIcon = document.getElementById('moon');
    const lImage = document.getElementById('l-image');
    const dImage = document.getElementById('d-image');
    const body = document.body;

    // Function to set the theme based on the preference
    const setTheme = (isDarkMode) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            lImage.style.display = 'none';
            dImage.style.display = 'block';
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            lImage.style.display = 'block';
            dImage.style.display = 'none';
        }
    };

    // Check the user's preference and set the initial theme
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDarkScheme);

    // Event listeners for toggling the theme
    sunIcon.addEventListener('click', () => {
        setTheme(false); // Switch to light mode
    });

    moonIcon.addEventListener('click', () => {
        setTheme(true); // Switch to dark mode
    });
});
