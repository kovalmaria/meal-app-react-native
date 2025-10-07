const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// 🔹 Отримати всі категорії
export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories.php`);
  const data = await res.json();
  return data.categories;
}

// 🔹 Отримати рецепти за категорією
export async function getMealsByCategory(category) {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals || [];
}

// 🔹 Отримати деталі конкретного рецепту по id
export async function getMealById(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals[0];
}
