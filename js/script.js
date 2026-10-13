// Логику менять не нужно — задача челленджа только в вёрстке/стилях (index.html, style.css).

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const rows = document.querySelectorAll(".recipe-row");

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const cat = categorySelect.value;

  rows.forEach((row) => {
    const matchesCategory = cat === "all" || row.dataset.cat === cat;
    const matchesQuery = row.dataset.name.toLowerCase().includes(query);
    row.style.display = matchesCategory && matchesQuery ? "" : "none";
  });
}

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);

// Открытие подробностей рецепта по клику на строку
rows.forEach((row) => {
  row.addEventListener("click", () => {
    document.getElementById("detailTitle").textContent = row.dataset.name;
    document.getElementById("detailIngredients").textContent = row.dataset.ingredients;
    document.getElementById("detailCooking").textContent = row.dataset.cooking;
    document.getElementById("recipeDetail").style.display = "block";
    document.getElementById("recipeDetail").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("closeDetail").addEventListener("click", () => {
  document.getElementById("recipeDetail").style.display = "none";
});

// Форма подписки
document.getElementById("subscribeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("subscribeEmail").value.trim();
  if (!email) return;
  document.getElementById("subscribeResult").textContent =
    `Спасибо! Новые рецепты будут приходить на ${email}.`;
  e.target.reset();
});
