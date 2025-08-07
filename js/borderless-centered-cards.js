function renderCards(containerSelector, cards, cardsPerRow = 3) {

    if (!Array.isArray(cards) || cards.length === 0) {
        return;
    }

    const container = document.querySelector(containerSelector);
    if (!container) {
        return;
    }

    // Create grid container with user-defined number of cards per row
    const grid = document.createElement('div');
    grid.className = `grid-${cardsPerRow}`;

    cards.forEach(card => {
        const cardItem = document.createElement('div');
        cardItem.className = 'card-item-centered';

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-container-card';

        const icon = document.createElement('span');
        icon.className = `${card.icon} service-icon-size`;
        iconWrapper.appendChild(icon);

        const title = document.createElement('p');
        title.className = 'card-title-centered';
        title.textContent = card.title;

        const body = document.createElement('p');
        body.className = 'body-text-centered';
        body.textContent = card.body;

        cardItem.appendChild(iconWrapper);
        cardItem.appendChild(title);
        cardItem.appendChild(body);
        grid.appendChild(cardItem);
    });

    container.appendChild(grid);
}