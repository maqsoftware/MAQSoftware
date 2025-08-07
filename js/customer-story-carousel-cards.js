function renderCustomerStoryCarouselCards(containerSelector, cards) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    cards.forEach(card => {
        // Create main <a> wrapper
        const cardLink = document.createElement("a");
        cardLink.className = "customer-stories-card";
        cardLink.href = card.link;

        // Image container
        const imgContainer = document.createElement("div");
        imgContainer.className = "img-container";

        const img = document.createElement("img");
        img.src = card.imageSrc;
        img.alt = card.imageAlt || "";
        img.className = "services-case-study-img";
        img.loading = "lazy";
        imgContainer.appendChild(img);

        // Card title
        const title = document.createElement("p");
        title.className = "card-title";
        title.textContent = card.title;

        // Card body text (can be empty)
        const body = document.createElement("p");
        body.className = "card-body-text";
        body.textContent = card.body || "";

        // Learn more link
        const learnMore = document.createElement("p");
        learnMore.className = "learn-more-link body-bold";
        learnMore.innerHTML = 'Read more <span class="chevron">&gt;</span>';

        // Assemble card
        cardLink.appendChild(imgContainer);
        cardLink.appendChild(title);
        cardLink.appendChild(body);
        cardLink.appendChild(learnMore);

        // Append to container
        container.appendChild(cardLink);
    });
}