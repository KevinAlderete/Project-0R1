//tarjetas similares
const cards = document.getElementById('cards');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('Api.json');
        const data = await res.json();
        // console.log(data);
        insertCard(data);
    } catch(error) {
        console.log(error);
    }
}

const insertCard = data => {
    data.forEach(element => {
        templateCard.querySelector('img').setAttribute("src", element.image);
        templateCard.querySelector('span').textContent = element.date;
        templateCard.querySelector('h3').textContent = element.title;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}