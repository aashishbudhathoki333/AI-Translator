import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Translator from "./pages/Translator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;