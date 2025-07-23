function generatePricingGrid(idSelector, cardDataArray, cardsPerRow) {
    const container = document.querySelector(idSelector);
    if (!container) return;

    // Create the grid wrapper
    const grid = document.createElement('div');
    grid.className = `grid-${cardsPerRow}`;

    cardDataArray.forEach(card => {
        const { title, icon, price, interval, benefits, link } = card;

        // Create price item wrapper
        const priceItem = document.createElement('div');
        priceItem.className = 'price-item';

        // Title
        const titleElem = document.createElement('p');
        titleElem.className = 'card-title-centered';
        titleElem.textContent = title;

        // Icon container
        const iconContainer = document.createElement('div');
        iconContainer.className = 'icon-container-card';
        const iconSpan = document.createElement('span');
        iconSpan.className = `${icon} service-icon-size`;
        iconContainer.appendChild(iconSpan);

        // Price and interval
        const priceElem = document.createElement('p');
        priceElem.className = 'card-title-centered';
        priceElem.textContent = price;

        const intervalElem = document.createElement('p');
        intervalElem.className = 'card-title-small';
        intervalElem.textContent = interval;

        // Benefit list
        const ul = document.createElement('ul');
        ul.className = 'card-list';
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.innerHTML = benefit;
            ul.appendChild(li);
        });

        // Call to action
        const ctaContainer = document.createElement('div');
        ctaContainer.className = 'flex-row';
        ctaContainer.style.marginBottom = '0px';

        const cta = document.createElement('a');
        cta.className = 'btn-primary btn-text';
        cta.href = link;
        cta.target = '_blank';
        cta.rel = 'noopener noreferrer';
        cta.textContent = link.startsWith('mailto:') ? 'Contact us' : 'Download now';

        ctaContainer.appendChild(cta);

        // Combine all into card
        priceItem.appendChild(titleElem);
        priceItem.appendChild(iconContainer);
        priceItem.appendChild(priceElem);
        priceItem.appendChild(intervalElem);
        priceItem.appendChild(ul);
        priceItem.appendChild(ctaContainer);

        grid.appendChild(priceItem);
    });

    container.appendChild(grid);
}