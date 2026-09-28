import { Settings as SettingsIcon } from "lucide-react";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="simple-page">
        <div className="page-container">
          <div className="simple-page-icon">
            <SettingsIcon size={28} />
          </div>

          <h1>Settings</h1>

          <p>
            Translation preferences and account settings will
            appear here.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Settings;