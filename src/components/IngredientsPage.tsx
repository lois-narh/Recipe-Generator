import { useState } from "react";
import { X, Plus, Sprout } from "lucide-react";

export default function IngredientsPage() {
  const [ingredientInput, setIngredientInput] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [allergyInput, setAllergyInput] = useState<string>("");
  const [allergies, setAllergies] = useState<string[]>([]);

  function addIngredient() {
    const trimmed = ingredientInput.trim();
    if (trimmed === "") return;
    setIngredients([...ingredients, trimmed]);
    setIngredientInput("");
  }

  function removeIngredient(index: number) {
    setIngredients(ingredients.filter((_, i) => i !== index));
  }

  function addAllergy() {
    const trimmed = allergyInput.trim();
    if (trimmed === "") return;
    setAllergies([...allergies, trimmed]);
    setAllergyInput("");
  }

  function removeAllergy(index: number) {
    setAllergies(allergies.filter((_, i) => i !== index));
  }

  return (
    <div
      className="min-h-screen w-full bg-[#F6F5F0] flex flex-col items-center px-4 py-16"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="w-11 h-11 rounded-full bg-[#3E5A34] flex items-center justify-center mb-5">
        <Sprout size={20} className="text-[#F6F5F0]" />
      </div>

      <h1 className="text-[30px] font-medium text-[#22261F] mb-1 text-center">
        What's in your fridge?
      </h1>
      <p className="text-[#6B6F63] text-sm mb-10 text-center max-w-sm">
        Add what you've got, tell us what to avoid, and we'll find something
        worth cooking.
      </p>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-[#EAE8DE] p-7">
        {/* Ingredients */}
        <label className="block text-xs font-medium text-[#4A4E43] mb-2">
          Ingredients
        </label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addIngredient()}
            placeholder="e.g. chicken, spinach"
            className="flex-1 px-3.5 py-2.5 rounded-lg border border-[#DDE1D3] bg-white text-[15px] outline-none focus:border-[#4B6B3F] focus:ring-2 focus:ring-[#4B6B3F]/15 transition"
          />
          <button
            onClick={addIngredient}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#4B6B3F] text-white hover:bg-[#3E5A34] transition shrink-0"
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {ingredients.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-1.5 bg-[#EDF1E8] text-[#3E5A34] text-sm px-3 py-1 rounded-full"
            >
              {item}
              <button
                onClick={() => removeIngredient(index)}
                className="hover:text-[#B5451D]"
              >
                <X size={13} />
              </button>
            </span>
          ))}
        </div>

        {/* Allergies */}
        <label className="block text-xs font-medium text-[#4A4E43] mb-2">
          Allergies
        </label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={allergyInput}
            onChange={(e) => setAllergyInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addAllergy()}
            placeholder="e.g. peanuts, shellfish"
            className="flex-1 px-3.5 py-2.5 rounded-lg border border-[#DDE1D3] bg-white text-[15px] outline-none focus:border-[#4B6B3F] focus:ring-2 focus:ring-[#4B6B3F]/15 transition"
          />
          <button
            onClick={addAllergy}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#4B6B3F] text-white hover:bg-[#3E5A34] transition shrink-0"
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-7">
          {allergies.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-1.5 bg-[#FBEAE3] text-[#B5451D] text-sm px-3 py-1 rounded-full"
            >
              {item}
              <button
                onClick={() => removeAllergy(index)}
                className="hover:opacity-70"
              >
                <X size={13} />
              </button>
            </span>
          ))}
        </div>

        <button
          disabled={ingredients.length === 0}
          className="w-full py-2.5 rounded-lg bg-[#4B6B3F] text-white text-sm font-medium hover:bg-[#3E5A34] active:scale-[0.99] transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Generate Recipe
        </button>
      </div>
    </div>
  );
}
