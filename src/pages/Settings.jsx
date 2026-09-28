import { useState } from "react";
import {
  Languages,
  Volume2,
  Bell,
  ShieldCheck,
  Palette,
  Save,
  Check,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

function Settings() {
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [targetLanguage, setTargetLanguage] = useState("Nepali");
  const [voice, setVoice] = useState("Female");
  const [theme, setTheme] = useState("Dark");

  const [autoDetect, setAutoDetect] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [saveHistory, setSaveHistory] = useState(true);

  const [saved, setSaved] = useState(false);

  const languages = [
    "English",
    "Nepali",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Japanese",
    "Korean",
  ];

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const handleReset = () => {
    setSourceLanguage("English");
    setTargetLanguage("Nepali");
    setVoice("Female");
    setTheme("Dark");
    setAutoDetect(true);
    setNotifications(true);
    setSoundEffects(true);
    setSaveHistory(true);
  };

  return (
    <div className="settings-page">
      <div className="settings-background"></div>

      <div className="settings-container">
        <div className="settings-header">
          <span className="settings-label">PREFERENCES</span>

          <h1>Settings.</h1>

          <p>
            Customize LinguaAI to make your translation experience work the
            way you want.
          </p>
        </div>

        <div className="settings-layout">
          <div className="settings-main">
            {/* Language Settings */}

            <section className="settings-card">
              <div className="settings-card-heading">
                <div className="settings-icon">
                  <Languages size={20} />
                </div>

                <div>
                  <h2>Language preferences</h2>
                  <p>Choose your default translation languages.</p>
                </div>
              </div>

              <div className="settings-fields">
                <div className="settings-field">
                  <label>Default source language</label>

                  <div className="settings-select">
                    <select
                      value={sourceLanguage}
                      onChange={(e) => setSourceLanguage(e.target.value)}
                    >
                      {languages.map((language) => (
                        <option key={language} value={language}>
                          {language}
                        </option>
                      ))}
                    </select>

                    <ChevronDown size={16} />
                  </div>
                </div>

                <div className="settings-field">
                  <label>Default target language</label>

                  <div className="settings-select">
                    <select
                      value={targetLanguage}
                      onChange={(e) => setTargetLanguage(e.target.value)}
                    >
                      {languages.map((language) => (
                        <option key={language} value={language}>
                          {language}
                        </option>
                      ))}
                    </select>

                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              <div className="settings-option">
                <div>
                  <strong>Automatically detect language</strong>
                  <span>
                    Let LinguaAI detect the source language automatically.
                  </span>
                </div>

                <button
                  className={`toggle ${autoDetect ? "active" : ""}`}
                  onClick={() => setAutoDetect(!autoDetect)}
                  aria-label="Toggle automatic language detection"
                >
                  <span></span>
                </button>
              </div>
            </section>

            {/* Voice Settings */}

            <section className="settings-card">
              <div className="settings-card-heading">
                <div className="settings-icon">
                  <Volume2 size={20} />
                </div>

                <div>
                  <h2>Voice & audio</h2>
                  <p>Customize how translated text sounds.</p>
                </div>
              </div>

              <div className="settings-field">
                <label>Preferred voice</label>

                <div className="voice-options">
                  {["Female", "Male"].map((item) => (
                    <button
                      key={item}
                      className={`voice-option ${
                        voice === item ? "selected" : ""
                      }`}
                      onClick={() => setVoice(item)}
                    >
                      <Volume2 size={17} />
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="settings-option">
                <div>
                  <strong>Sound effects</strong>
                  <span>
                    Play subtle sounds when actions are completed.
                  </span>
                </div>

                <button
                  className={`toggle ${soundEffects ? "active" : ""}`}
                  onClick={() => setSoundEffects(!soundEffects)}
                  aria-label="Toggle sound effects"
                >
                  <span></span>
                </button>
              </div>
            </section>

            {/* Notifications */}

            <section className="settings-card">
              <div className="settings-card-heading">
                <div className="settings-icon">
                  <Bell size={20} />
                </div>

                <div>
                  <h2>Notifications</h2>
                  <p>Control how LinguaAI keeps you updated.</p>
                </div>
              </div>

              <div className="settings-option">
                <div>
                  <strong>Translation notifications</strong>
                  <span>
                    Receive notifications about important translation updates.
                  </span>
                </div>

                <button
                  className={`toggle ${notifications ? "active" : ""}`}
                  onClick={() => setNotifications(!notifications)}
                  aria-label="Toggle notifications"
                >
                  <span></span>
                </button>
              </div>
            </section>

            {/* Privacy */}

            <section className="settings-card">
              <div className="settings-card-heading">
                <div className="settings-icon">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h2>Privacy</h2>
                  <p>Control how your translation activity is handled.</p>
                </div>
              </div>

              <div className="settings-option">
                <div>
                  <strong>Save translation history</strong>
                  <span>
                    Keep your previous translations available in History.
                  </span>
                </div>

                <button
                  className={`toggle ${saveHistory ? "active" : ""}`}
                  onClick={() => setSaveHistory(!saveHistory)}
                  aria-label="Toggle translation history"
                >
                  <span></span>
                </button>
              </div>

              <div className="privacy-note">
                <ShieldCheck size={16} />

                <span>
                  Your settings are currently stored locally in this browser.
                  Cloud synchronization will be available when the backend is
                  connected.
                </span>
              </div>
            </section>

            {/* Appearance */}

            <section className="settings-card">
              <div className="settings-card-heading">
                <div className="settings-icon">
                  <Palette size={20} />
                </div>

                <div>
                  <h2>Appearance</h2>
                  <p>Choose how LinguaAI looks.</p>
                </div>
              </div>

              <div className="theme-options">
                {["Dark", "Light", "System"].map((item) => (
                  <button
                    key={item}
                    className={`theme-option ${
                      theme === item ? "selected" : ""
                    }`}
                    onClick={() => setTheme(item)}
                  >
                    <div className={`theme-preview ${item.toLowerCase()}`}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <strong>{item}</strong>

                    {theme === item && <Check size={16} />}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <aside className="settings-sidebar">
            <div className="settings-sidebar-card">
              <div className="settings-sidebar-icon">
                <Languages size={22} />
              </div>

              <span>LINGUAAI</span>

              <h3>Your preferences.</h3>

              <p>
                These settings help personalize your translation experience.
              </p>
            </div>
          </aside>
        </div>

        <div className="settings-actions">
          <button className="reset-settings" onClick={handleReset}>
            <RotateCcw size={17} />
            Reset
          </button>

          <button className="save-settings" onClick={handleSave}>
            {saved ? <Check size={18} /> : <Save size={18} />}

            {saved ? "Saved" : "Save settings"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;