function getRequests() {
    const urls = [
        'https://api.artic.edu/api/v1/artworks/129883',
        'https://api.artic.edu/api/v1/artworks/129884',
        'https://api.artic.edu/api/v1/artworks/129885'
    ];

    const cardContainer = document.getElementById('cards-container');
    cardContainer.innerHTML = ''; // Clear existing content


    urls.forEach(url => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const title = data.data.title;
                const artist = data.data.artist_display;
                const artwork = data.data.artwork_type_title;


                const categoryTitle = data.data.category_titles;
                const card = createCard(categoryTitle)
                cardContainer.appendChild(card)
            })
            .catch(error => console.log(error))
    })




}


function createCard(categoryTitle) {
    const card = document.createElement('div');
    card.className = 'card'

    const container = document.createElement('div');
    container.className = 'container'

    const h4 = document.createElement('h4')
    const b = document.createElement('b')
    b.textContent = categoryTitle.join(',');
    h4.appendChild(b);


    container.appendChild(h4);
    card.appendChild(container);

    return card;

}
