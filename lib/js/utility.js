function toggleNav() {
    const nav_element = document.getElementById('nav');
    nav_element.classList.toggle('show');
}

function closeNav() {
    const nav_element = document.getElementById('nav');
    nav_element.classList.remove('show');
}

function submitContact(e) {
    e.preventDefault();
}