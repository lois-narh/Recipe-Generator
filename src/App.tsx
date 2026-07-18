import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import IngredientsPage from "./components/IngredientsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/app" element={<IngredientsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
