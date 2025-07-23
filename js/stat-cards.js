function renderStatCards(idSelector, itemsArray, gridCount) {
    const container = document.querySelector(idSelector);
    if (!container) return;

    // Create the outer grid div
    const grid = document.createElement("div");
    grid.className = `grid-${gridCount}`;

    // Generate each stat item
    itemsArray.forEach(item => {
        const statItem = document.createElement("div");
        statItem.className = "stat-item";

        const statFlex = document.createElement("div");
        statFlex.className = "stat-flex";

        const statText = document.createElement("p");
        statText.className = "statistic-text";
        statText.textContent = item.stat;

        const underline = document.createElement("div");
        underline.className = "red-underline";

        statFlex.appendChild(statText);
        statFlex.appendChild(underline);

        const description = document.createElement("p");
        description.className = "card-title";
        description.innerHTML = item.description;

        statItem.appendChild(statFlex);
        statItem.appendChild(description);
        grid.appendChild(statItem);
    });

    container.appendChild(grid);
}