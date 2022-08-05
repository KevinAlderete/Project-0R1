//tarjetas similares
const cards = document.getElementById('person');
const templateCard = document.getElementById('template-person').content;
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
        templateCard.querySelector('h3').textContent = element.name;
        templateCard.querySelector('p').textContent = element.description;
        templateCard.querySelector('span').textContent = element.position;
        templateCard.getElementById('phone').textContent = element.number;
        templateCard.getElementById('email').textContent = element.email;
        //enlaces para cv facebook linkedin
        templateCard.getElementById('linkedin').setAttribute("href", element.linkedin);
        templateCard.getElementById('facebook').setAttribute("href", element.facebook);
        templateCard.getElementById('cv').setAttribute("href", element.cv);

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}