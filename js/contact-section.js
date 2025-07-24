function renderContactSection(idSelector, heading, subheading, mailtoHref, isGrey = false) {
  const container = document.querySelector(idSelector);
  if (!container) return;

  const section = document.createElement("div");
  section.className = "section-block-padding-sm";
  if (isGrey) section.classList.add("grey-bg");

  section.innerHTML = `
    <div class="section-container">
      <div class="flex-col-2 max-section-size">
        <div class="hero-item-1">
          <h1 class="contact-us-section-heading margin-sm">
            ${heading}
          </h1>
          <p class="section-subheading">
            ${subheading}
          </p>
          <div class="one-rem-div"></div>
          <a href="${mailtoHref}" class="email-link email-link-container">
            <span class="tabler--mail"></span>
            <p class="email-link">${mailtoHref.replace('mailto:', '').split('?')[0]}</p>
          </a>
        </div>
        <div class="hero-item-2"></div>
      </div>
    </div>
  `;

  container.appendChild(section);
}