
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import History from "./pages/History";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/history" element={<History />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

