function renderHighlightCards(containerSelector, cards, cardsPerRow = 3) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // Create the grid container with dynamic class name
    const grid = document.createElement("div");
    grid.className = `grid-${cardsPerRow}`;

    // Loop through each card and create elements
    cards.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.className = `highlight-card-${card.colorSuffix || "default"}`;

        // Optional tagline
        if (card.tagline) {
            const tagline = document.createElement("p");
            tagline.className = "highlight-card-text";
            tagline.innerHTML = `<strong>${card.tagline}</strong><br>`;
            cardDiv.appendChild(tagline);
        }

        // Title
        const title = document.createElement("p");
        title.className = "highlight-card-title";
        title.textContent = card.title;
        cardDiv.appendChild(title);

        // Body text
        const body = document.createElement("p");
        body.className = "highlight-card-text";
        body.textContent = card.body;
        cardDiv.appendChild(body);

        // Append to grid
        grid.appendChild(cardDiv);
    });

    // Append full grid to container
    container.appendChild(grid);
}