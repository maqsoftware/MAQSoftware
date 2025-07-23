function renderIconCards(containerSelector, cards, cardsPerRow = 3) {
  console.log("renderIconCards ran");

  if (!Array.isArray(cards) || cards.length === 0) {
    console.log("error: empty array");
    return;
  }

  const container = document.querySelector(containerSelector);
  if (!container) {
    console.log("error: container not found");
    return;
  }

  const grid = document.createElement('div');
  grid.className = `grid-${cardsPerRow}`;

  cards.forEach(card => {
    const cardElement = card.href
      ? document.createElement('a')
      : document.createElement('div');

    cardElement.className = 'linked-card';

    if (card.href) {
      cardElement.href = card.href;
      cardElement.setAttribute('aria-label', card.ariaLabel || `Go to ${card.title}`);
    }

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon-container-card';

    const icon = document.createElement('span');
    icon.className = `${card.icon} service-icon-size`;
    iconWrapper.appendChild(icon);

    const title = document.createElement('p');
    title.className = 'card-title';
    title.textContent = card.title;

    const body = document.createElement('p');
    body.className = 'card-body-text';
    body.textContent = card.body;

    const learnMore = document.createElement('p');
    if (card.href) {
      learnMore.className = 'learn-more-link body-bold';
      learnMore.innerHTML = 'Learn more <span class="chevron">&gt;</span>';
    } else {
      learnMore.className = 'learn-more-link-inactive body-bold';
      learnMore.textContent = 'Coming soon';
    }

    cardElement.appendChild(iconWrapper);
    cardElement.appendChild(title);
    cardElement.appendChild(body);
    cardElement.appendChild(learnMore);

    grid.appendChild(cardElement);
  });

  container.appendChild(grid);
}