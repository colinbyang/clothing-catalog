/**
 * Clothing Catalog - scripts.js
 * SEA Stage 2 Data Catalog Project
 *
 * This file handles:
 * - Rendering clothing cards from clothingData (defined in data.js)
 * - Filtering by type, color, and brand
 * - Searching by name
 * - Sorting by price and name
 * - Adding new items via a form
 * - Removing items via a delete button on each card
 */

// ── STATE ──────────────────────────────────────────────────────────────────

let displayedItems = [];

// Used to assign a unique id to every new item added by the user
let nextId = 100;

// ── RENDER ─────────────────────────────────────────────────────────────────

function showCards(items) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  if (items.length === 0) {
    cardContainer.innerHTML = "<p class='no-results'>No items match your search.</p>";
    return;
  }

  const templateCard = document.querySelector(".card");

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, item);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, item) {
  card.style.display = "block";

  card.querySelector("h2").textContent = item.name;
  card.querySelector("img").src = item.imageURL;
  card.querySelector("img").alt = item.name;

  const details = card.querySelector("ul");
  details.innerHTML = `
    <li><span class="label">Type:</span> ${item.type}</li>
    <li><span class="label">Brand:</span> ${item.brand}</li>
    <li><span class="label">Color:</span> ${item.color}</li>
    <li><span class="label">Size:</span> ${item.size}</li>
    <li><span class="label">Price:</span> $${item.price.toFixed(2)}</li>
  `;

  // Wire up the delete button on this card to removeItem
  const deleteBtn = card.querySelector(".delete-btn");
  deleteBtn.onclick = function () {
    removeItem(item.id);
  };
}

// ── ADD ITEM ───────────────────────────────────────────────────────────────

function addItem() {
  const name     = document.getElementById("new-name").value.trim();
  const type     = document.getElementById("new-type").value.trim();
  const color    = document.getElementById("new-color").value.trim();
  const size     = document.getElementById("new-size").value.trim();
  const brand    = document.getElementById("new-brand").value.trim();
  const price    = parseFloat(document.getElementById("new-price").value);
  const imageURL = document.getElementById("new-image").value.trim();

  // Validate — all fields except imageURL are required
  if (!name || !type || !color || !size || !brand || isNaN(price) || price < 0) {
    alert("Please fill in all fields. Price must be a valid number.");
    return;
  }

  const newItem = {
    id: nextId,
    name: name,
    type: type,
    color: color,
    size: size,
    brand: brand,
    price: price,
    imageURL: imageURL || "https://via.placeholder.com/400x300?text=No+Image"
  };

  nextId++;
  clothingData.push(newItem);

  // Refresh dropdowns in case new type/color/brand was introduced
  populateDropdowns();
  applyFilters();

  // Clear the form fields
  document.getElementById("new-name").value = "";
  document.getElementById("new-type").value = "";
  document.getElementById("new-color").value = "";
  document.getElementById("new-size").value = "";
  document.getElementById("new-brand").value = "";
  document.getElementById("new-price").value = "";
  document.getElementById("new-image").value = "";

  // Collapse the form after a successful add
  toggleForm(false);
}

// ── REMOVE ITEM ────────────────────────────────────────────────────────────

function removeItem(id) {
  // Find and splice out the item with this id
  for (let i = 0; i < clothingData.length; i++) {
    if (clothingData[i].id === id) {
      clothingData.splice(i, 1);
      break;
    }
  }

  // Refresh dropdowns in case a type/color/brand no longer has any items
  populateDropdowns();
  applyFilters();
}

// ── TOGGLE FORM ────────────────────────────────────────────────────────────

function toggleForm(forceState) {
  const form = document.getElementById("add-item-form");
  const btn  = document.getElementById("toggle-form-btn");
  const isHidden = form.style.display === "none" || form.style.display === "";

  if (forceState === false || !isHidden) {
    form.style.display = "none";
    btn.textContent = "+ Add Item";
  } else {
    form.style.display = "flex";
    btn.textContent = "✕ Cancel";
  }
}

// ── FILTER + SEARCH + SORT ─────────────────────────────────────────────────

function applyFilters() {
  const searchQuery   = document.getElementById("search").value.toLowerCase();
  const selectedType  = document.getElementById("filter-type").value;
  const selectedColor = document.getElementById("filter-color").value;
  const selectedBrand = document.getElementById("filter-brand").value;
  const sortBy        = document.getElementById("sort").value;

  let results = clothingData;

  if (selectedType !== "All") {
    results = results.filter(item => item.type === selectedType);
  }
  if (selectedColor !== "All") {
    results = results.filter(item => item.color === selectedColor);
  }
  if (selectedBrand !== "All") {
    results = results.filter(item => item.brand === selectedBrand);
  }
  if (searchQuery !== "") {
    results = results.filter(item =>
      item.name.toLowerCase().includes(searchQuery)
    );
  }

  if (sortBy === "price-asc") {
    results = results.slice().sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    results = results.slice().sort((a, b) => b.price - a.price);
  } else if (sortBy === "name-asc") {
    results = results.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    results = results.slice().sort((a, b) => b.name.localeCompare(a.name));
  }

  displayedItems = results;
  showCards(displayedItems);
  updateCount(displayedItems.length);
}

// ── COUNT ──────────────────────────────────────────────────────────────────

function updateCount(count) {
  const countEl = document.getElementById("item-count");
  if (countEl) {
    countEl.textContent = `${count} item${count !== 1 ? "s" : ""} found`;
  }
}

// ── CONTROLS SETUP ─────────────────────────────────────────────────────────

function populateDropdowns() {
  const types  = ["All", ...new Set(clothingData.map(item => item.type))];
  const colors = ["All", ...new Set(clothingData.map(item => item.color))];
  const brands = ["All", ...new Set(clothingData.map(item => item.brand))];

  fillDropdown("filter-type", types);
  fillDropdown("filter-color", colors);
  fillDropdown("filter-brand", brands);
}

function fillDropdown(id, values) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    const option = document.createElement("option");
    option.value = values[i];
    option.textContent = values[i];
    select.appendChild(option);
  }
}

function resetFilters() {
  document.getElementById("search").value = "";
  document.getElementById("filter-type").value = "All";
  document.getElementById("filter-color").value = "All";
  document.getElementById("filter-brand").value = "All";
  document.getElementById("sort").value = "default";
  applyFilters();
}

// ── INIT ───────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
  populateDropdowns();

  document.getElementById("search").addEventListener("input", applyFilters);
  document.getElementById("filter-type").addEventListener("change", applyFilters);
  document.getElementById("filter-color").addEventListener("change", applyFilters);
  document.getElementById("filter-brand").addEventListener("change", applyFilters);
  document.getElementById("sort").addEventListener("change", applyFilters);

  applyFilters();
});