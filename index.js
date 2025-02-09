document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('mobile-menu').style.display = 'block';
});

document.getElementById('cross').addEventListener('click', function () {
    document.getElementById('mobile-menu').style.display = 'none';
});
const elements = document.querySelectorAll('#portfolio, #about, #contact');
elements.forEach(element => {
    element.addEventListener('click', function () {
        document.getElementById('mobile-menu').style.display = 'none';
    })
});