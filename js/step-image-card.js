function renderStepImageCards(idSelector, cards, cardsPerRow) {
    const container = document.querySelector(idSelector);
    if (!container) {
        console.error(`No element found with selector: ${idSelector}`);
        return;
    }

    // Create grid wrapper
    const grid = document.createElement("div");
    grid.className = `grid-${cardsPerRow}`;

    // Loop through cards and create elements
    cards.forEach(({ imgSrc, imgAlt, title, body }) => {
        const card = document.createElement("div");
        card.className = "card-item-centered";

        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = imgAlt;
        img.className = "steps-img-story";

        const cardTitle = document.createElement("p");
        cardTitle.className = "card-title-centered";
        cardTitle.textContent = title;

        const cardBody = document.createElement("p");
        cardBody.className = "body-text-centered";
        cardBody.textContent = body;

        card.appendChild(img);
        card.appendChild(cardTitle);
        card.appendChild(cardBody);
        grid.appendChild(card);
    });

    // Append to container
    container.appendChild(grid);
}