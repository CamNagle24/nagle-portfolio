function toggleMenu() {
    const menu = document.querySelection(".menu-links");
    const icon = document.querySelection(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}