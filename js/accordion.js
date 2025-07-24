function renderAccordion(containerSelector, data) {
  const idSuffixes = ['One', 'Two', 'Three', 'Four', 'Five'];
  const container = document.querySelector(containerSelector);
  if (!container || data.length > 5) return;

  container.className = 'accordion';
  container.id = 'accordionExample';
  container.innerHTML = '';

  data.forEach((item, index) => {
    const suffix = idSuffixes[index];
    const isFirst = index === 0;
    const collapsedClass = isFirst ? '' : 'collapsed';
    const showClass = isFirst ? 'show' : '';
    const expandedAttr = isFirst ? 'true' : 'false';

    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    accordionItem.innerHTML = `
      <h2 class="accordion-header" id="heading${suffix}">
        <button class="accordion-button ${collapsedClass}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${suffix}" aria-expanded="${expandedAttr}" aria-controls="collapse${suffix}">
          ${item.title}
        </button>
      </h2>
      <div id="collapse${suffix}" class="accordion-collapse collapse ${showClass}" aria-labelledby="heading${suffix}" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="flex-col-2 accordion-body-2">
            <img src="${item.imageSrc}" class="accordion-img mb-accordion-img" alt="${item.imageAlt}">
            <div class="accordion-text">
              <div class="accordion-text-group">
                <p class="accordion-title"><strong>${item.sectionTitle}</strong></p>
                <p class="body-text">${item.bodyText}</p>
              </div>
              <a href="${item.linkHref}" class="learn-more-link body-bold">${item.linkText}<span class="chevron">&gt;</span></a>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(accordionItem);
  });
}