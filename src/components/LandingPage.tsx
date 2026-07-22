import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "./Navbar";
/*import steakMash from "../assets/steak-mash.jpg";
import truffle from "../assets/truffle-pasta.jpg";
import dumplings from "../assets/chicken-dumplings.jpg";*/
import quesadilla from "../assets/bbq-chicken-quesadilla.jpg";
import cordonBleu from "../assets/chicken-cordon-bleu.jpg";
import shortRib from "../assets/braised-short-rib.jpg";

const steps = [
  {
    number: "1",
    title: "List Ingredients",
    description: "Simply type out the items in your fridge or pantry. Our AI understands any combination.",
  },
  {
    number: "2",
    title: "Customize",
    description: "Filter by dietary needs, prep time, or cuisine style — vegan, keto, gluten-free, and more.",
  },
  {
    number: "3",
    title: "Cook",
    description: "Follow step-by-step instructions designed for efficiency. No food waste, just great meals.",
  },
];

const curatedPicks = [
  { title: "BBQ Chicken Quesadilla", tag: "Tex-Mex", time: "20 mins", image: quesadilla },
  { title: "Chicken Cordon Bleu", tag: "Comfort food", time: "40 mins", image: cordonBleu },
  { title: "Braised Short Rib", tag: "Dinner", time: "2 hrs 30 mins", image: shortRib },
];

const faqs = [
  {
    q: "What should I cook when I don't know what to make?",
    a: "Enter the ingredients you have in your fridge or pantry, and you'll get personalized recipe suggestions instantly.",
  },
  {
    q: "How does the recipe generator work?",
    a: "It looks at your ingredients and suggests recipes that make sense together, factoring in flavor combinations and cooking methods.",
  },
  {
    q: "Is it free to use?",
    a: "Yes — no subscriptions, no hidden fees. Just enter your ingredients and get instant recipe ideas.",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [quickIngredients, setQuickIngredients] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleQuickGenerate() {
    navigate("/app", { state: { prefill: quickIngredients } });
  }

  return (
    <div className="min-h-screen w-full bg-[#F6F5F0]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block text-xs font-medium text-[#4B6B3F] bg-[#EDF1E8] px-3 py-1 rounded-full mb-6">
          Free AI Recipe Generator
        </span>
        <h1 className="text-[44px] md:text-[54px] leading-[1.1] font-medium text-[#22261F] mb-5 max-w-3xl mx-auto">
          What's in your fridge?
        </h1>
        <p className="text-[#6B6F63] text-base leading-relaxed mb-9 max-w-xl mx-auto">
          Stop staring blankly at your shelves. Tell us what you've got, and our
          AI will turn it into something worth cooking.
        </p>

        {/* Quick-generate bar */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="text"
            value={quickIngredients}
            onChange={(e) => setQuickIngredients(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleQuickGenerate()}
            placeholder="Eggs, spinach, heavy cream..."
            className="flex-1 px-4 py-3 rounded-lg border border-[#DDE1D3] bg-white text-[15px] outline-none focus:border-[#4B6B3F] focus:ring-2 focus:ring-[#4B6B3F]/15 transition"
          />
          <button
            onClick={handleQuickGenerate}
            className="px-6 py-3 rounded-lg bg-[#4B6B3F] text-white text-sm font-medium hover:bg-[#3E5A34] active:scale-[0.99] transition shrink-0"
          >
            Generate
          </button>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-white border-y border-[#EAE8DE] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-[28px] font-medium text-[#22261F] mb-2 text-center">
            Master your kitchen in seconds
          </h2>
          <p className="text-[#6B6F63] text-sm text-center mb-12">
            No food waste. No fancy grocery shopping. Just simple steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#4B6B3F] text-white flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                  {step.number}
                </div>
                <h3 className="text-[16px] font-medium text-[#22261F] mb-2">{step.title}</h3>
                <p className="text-[#6B6F63] text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CURATED PICKS */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[26px] font-medium text-[#22261F] mb-1">Today's Curated Picks</h2>
            <p className="text-[#6B6F63] text-sm">Based on common ingredients this week.</p>
          </div>
          <button
            onClick={() => navigate("/discover")}
            className="text-sm text-[#4B6B3F] font-medium hover:underline shrink-0"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {curatedPicks.map((pick) => (
            <div
              key={pick.title}
              onClick={() => navigate("/discover")}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#EAE8DE] hover:shadow-md transition cursor-pointer group"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={pick.image}
                  alt={pick.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-[#4B6B3F] bg-[#EDF1E8] px-2 py-0.5 rounded-full">
                  {pick.tag}
                </span>
                <h3 className="text-[15px] font-medium text-[#22261F] mt-2">{pick.title}</h3>
                <p className="text-xs text-[#6B6F63] mt-1">{pick.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white border-y border-[#EAE8DE] py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-[26px] font-medium text-[#22261F] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#EAE8DE] rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-[15px] font-medium text-[#22261F]"
                >
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className={`text-[#6B6F63] transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <p className="px-5 pb-4 text-sm text-[#6B6F63] leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-[30px] font-medium text-[#22261F] mb-3">
          Ready to stop wasting food?
        </h2>
        <p className="text-[#6B6F63] text-sm mb-8 max-w-md mx-auto">
          Join home cooks discovering new favorites from what's already in their fridge.
        </p>
        <button
          onClick={() => navigate("/app")}
          className="px-7 py-3 rounded-lg bg-[#4B6B3F] text-white text-sm font-medium hover:bg-[#3E5A34] active:scale-[0.99] transition"
        >
          Get Started
        </button>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#EAE8DE] py-8 text-center text-xs text-[#6B6F63]">
        © 2026 Recipe Generator. Built while learning React.
      </footer>
    </div>
  );
}