import { History as HistoryIcon } from "lucide-react";
import Navbar from "../components/Navbar";

function History() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="simple-page">
        <div className="page-container">
          <div className="simple-page-icon">
            <HistoryIcon size={28} />
          </div>

          <h1>Translation History</h1>

          <p>
            Your previous translations will appear here.
          </p>
        </div>
      </main>
    </div>
  );
}

export default History;