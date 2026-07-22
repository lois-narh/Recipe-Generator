const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;
  strCategory?: string;
  strArea?: string;
};

// Search meals containing ONE ingredient
export async function searchByIngredient(ingredient: string): Promise<Meal[]> {
  const response = await fetch(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`);
  const data = await response.json();
  return data.meals ?? []; // meals is null if nothing matches
}

// Get full recipe details (including instructions) for one meal by id
export async function getMealDetails(id: string): Promise<Meal | null> {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
}