function renderImageCards(containerSelector, cards, cardsPerRow = 4) {
  console.log("renderImageCards ran");

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
    const link = document.createElement('a');
    link.className = 'linked-card';
    link.href = card.href;
    link.setAttribute('aria-label', card.ariaLabel || `Go to ${card.title}`);

    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

    const img = document.createElement('img');
    img.src = card.imageSrc;
    img.alt = card.imageAlt || '';
    img.className = 'services-case-study-img';
    img.loading = 'lazy';
    imgContainer.appendChild(img);

    const title = document.createElement('p');
    title.className = 'card-title';
    title.textContent = card.title;

    const body = document.createElement('p');
    body.className = 'card-body-text';
    body.textContent = card.bodyText || '';

    const learnMore = document.createElement('p');
    learnMore.className = 'learn-more-link body-bold';
    learnMore.innerHTML = 'Learn more <span class="chevron">&gt;</span>';

    link.appendChild(imgContainer);
    link.appendChild(title);
    link.appendChild(body);
    link.appendChild(learnMore);

    grid.appendChild(link);
  });

  container.appendChild(grid);
}