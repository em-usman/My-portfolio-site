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

const cardData = [
    {
        id: 1,
        imgSrc: "card-images/card 1.png",
        title: "Tonic",
        frame: ['CANOPY', 'Back End Dev', '2015'],
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 2,
        class: 'reverse',
        imgSrc: "card-images/card 2.png",
        title: "Multi-Post <br> Stories",
        frame: ['CANOPY', 'Back End Dev', '2015'],
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 3,
        imgSrc: "card-images/card3.png",
        title: "Tonic",
        frame: ['CANOPY', 'Back End Dev', '2015'],
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 4,
        class: 'reverse',
        imgSrc: "card-images/card4.png",
        title: "Multi-Post <br> Stories",
        frame: ['CANOPY', 'Back End Dev', '2015'],
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
];

const container = document.getElementById('works');

function display() {
    let displayCard = '';
    for (let i = 0; i < cardData.length; i += 1) {
        displayCard += `
        <section class="card ${cardData[i].class}">
            <img class="cards-img" src="${cardData[i].imgSrc}" alt="">
            <div class="card-content">
                <h1 class="card-title">${cardData[i].title}</h1>
                <ul class="frame">
                    <li class="card-frame canopy">${cardData[i].frame[0]}</li>
                    <li class="card-frame">${cardData[i].frame[1]}</li>
                    <li class="card-frame">${cardData[i].frame[2]}</li>
                </ul>
                <p class="card-text">${cardData[i].description}</p>
                <ul class="tags">
                    <li class="tag-item">${cardData[i].tags[0]}</li>
                    <li class="tag-item">${cardData[i].tags[1]}</li>
                    <li class="tag-item">${cardData[i].tags[2]}</li>
                </ul>
                <button class="card-button">See Project</button>
            </div>
        </section>
    `;
    }
    container.innerHTML = displayCard;
}
display();

document.querySelectorAll('.card-button').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('popup').style.display = 'block';
    });
});

document.getElementById('popup-cancel').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
});
