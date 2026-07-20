import bbqQuesadilla from "../assets/bbq-chicken-quesadilla.jpg";
import berryTart from "../assets/berry-tart.jpg";
import trufflePasta from "../assets/truffle-pasta.jpg";
import cordonBleu from "../assets/chicken-cordon-bleu.jpg";
import dumplings from "../assets/chicken-dumplings.jpg";
import carbonara from "../assets/carbonara.jpg";
import cheesecake from "../assets/blueberry-cheesecake.jpg";
import steakMash from "../assets/steak-mash.jpg";
import shortRib from "../assets/braised-short-rib.jpg";

// This is our fake data for now — an array of recipe objects.
// Later, this exact shape of data will come from a real API call instead.
const recipes = [
  {
    id: 1,
    title: "BBQ Chicken Quesadilla",
    tag: "Tex-Mex",
    image: bbqQuesadilla,
  },
  { id: 2, title: "Raspberry Tart", tag: "Dessert", image: berryTart },
  { id: 3, title: "Black Truffle Pasta", tag: "Italian", image: trufflePasta },
  {
    id: 4,
    title: "Chicken Cordon Bleu",
    tag: "Comfort food",
    image: cordonBleu,
  },
  { id: 5, title: "Pan-Fried Dumplings", tag: "Asian", image: dumplings },
  { id: 6, title: "Bacon Carbonara", tag: "Italian", image: carbonara },
  { id: 7, title: "Blueberry Cheesecake", tag: "Dessert", image: cheesecake },
  { id: 8, title: "Steak & Mash", tag: "Dinner", image: steakMash },
  { id: 9, title: "Braised Short Rib", tag: "Dinner", image: shortRib },
];

export default function RecipeResultsPage() {
  return (
    <div
      className="min-h-screen w-full bg-[#F6F5F0] px-6 py-16"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-[30px] font-medium text-[#22261F] mb-1">
          Here's what you can make
        </h1>
        <p className="text-[#6B6F63] text-sm mb-10">
          Based on what's in your fridge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#EAE8DE] hover:shadow-md transition cursor-pointer group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-[#4B6B3F] bg-[#EDF1E8] px-2 py-0.5 rounded-full">
                  {recipe.tag}
                </span>
                <h3 className="text-[15px] font-medium text-[#22261F] mt-2">
                  {recipe.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
