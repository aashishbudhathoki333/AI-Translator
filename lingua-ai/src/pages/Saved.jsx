import { Bookmark } from "lucide-react";
import Navbar from "../components/Navbar";

function Saved() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="simple-page">
        <div className="page-container">
          <div className="simple-page-icon">
            <Bookmark size={28} />
          </div>

          <h1>Saved Translations</h1>

          <p>
            Your saved translations will appear here.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Saved;