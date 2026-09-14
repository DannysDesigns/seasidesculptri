(() => {
  const section = document.querySelector("[data-menu-api]");
  if (!section) return;

  const status = section.querySelector(".shared-menu-status");
  const grid = section.querySelector(".shared-menu-grid");

  const addText = (element, tagName, value, className = "") => {
    const child = document.createElement(tagName);
    child.textContent = value;
    if (className) child.className = className;
    element.appendChild(child);
  };

  fetch(section.dataset.menuApi, { cache: "no-store" })
    .then((response) => {
      if (response.status === 404) {
        throw new Error("Create Seaside Sculpt with the key 'seaside-sculpt' in the host portal, then refresh this page.");
      }
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((items) => {
      status.textContent = items.length ? "Live menu data loaded." : "No menu items have been added yet.";
      for (const item of items) {
        const card = document.createElement("article");
        card.className = "shared-menu-card";
        if (item.image_url) {
          const image = document.createElement("img");
          image.src = item.image_url;
          image.alt = item.item_name;
          card.appendChild(image);
        }
        const content = document.createElement("div");
        content.className = "shared-menu-card-content";
        const heading = document.createElement("div");
        heading.className = "shared-menu-heading";
        addText(heading, "h3", item.item_name);
        addText(
          heading,
          "span",
          new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price_cents / 100),
          "price"
        );
        content.appendChild(heading);
        addText(content, "p", item.category, "shared-menu-category");
        if (item.description) addText(content, "p", item.description);
        card.appendChild(content);
        grid.appendChild(card);
      }
    })
    .catch((error) => {
      status.textContent = error.message || "The local menu service is unavailable. Start the website data previews launcher and refresh.";
    });
})();
