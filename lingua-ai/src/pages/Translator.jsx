
import { useState } from "react";
import {
  ArrowDownUp,
  Copy,
  Heart,
  Mic,
  Volume2,
  Sparkles,
  Trash2,
  WandSparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";

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

function Translator() {
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [targetLanguage, setTargetLanguage] = useState("Nepali");
  const [text, setText] = useState("");
  const [tone, setTone] = useState("Natural");
  const [saved, setSaved] = useState(false);

  const handleSwap = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const handleClear = () => {
    setText("");
  };

  const handleTranslate = () => {
    if (!text.trim()) return;

    // AI translation will be connected here later.
    console.log("Translation requested:", {
      text,
      sourceLanguage,
      targetLanguage,
      tone,
    });
  };

  const handleCopy = () => {
    if (!text) return;

    navigator.clipboard.writeText(text);
  };

  return (
    <div className="app-shell">
      <Navbar />

      <main className="translator-page">
        <div className="page-container">
          {/* Header */}
          <section className="translator-header">
            <div>
              <div className="ai-label">
                <Sparkles size={15} />
                AI TRANSLATOR
              </div>

              <h1>Translate with context.</h1>

              <p>
                Natural, accurate translations powered by AI that understands
                what you mean.
              </p>
            </div>
          </section>

          {/* Language bar */}
          <section className="language-bar">
            <div className="language-select">
              <span>From</span>

              <select
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
              >
                {languages.map((language) => (
                  <option key={language}>{language}</option>
                ))}
              </select>
            </div>

            <button
              className="swap-button"
              onClick={handleSwap}
              aria-label="Swap languages"
            >
              <ArrowDownUp size={19} />
            </button>

            <div className="language-select">
              <span>To</span>

              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              >
                {languages.map((language) => (
                  <option key={language}>{language}</option>
                ))}
              </select>
            </div>
          </section>

          {/* Translation workspace */}
          <section className="translation-workspace">
            {/* Input */}
            <div className="translation-card input-card">
              <div className="card-top">
                <span>{sourceLanguage}</span>

                {text && (
                  <button onClick={handleClear} className="icon-button">
                    <Trash2 size={17} />
                  </button>
                )}
              </div>

              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste something to translate..."
                maxLength={5000}
              />

              <div className="card-bottom">
                <span>{text.length}/5000</span>

                <div className="input-actions">
                  <button className="icon-button" title="Voice input">
                    <Mic size={19} />
                  </button>

                  <button
                    className="icon-button"
                    onClick={handleTranslate}
                    title="AI translate"
                  >
                    <WandSparkles size={19} />
                  </button>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="translation-card output-card">
              <div className="card-top">
                <span>{targetLanguage}</span>

                <span className="ai-powered">
                  <Sparkles size={13} />
                  AI
                </span>
              </div>

              <div className="translation-result">
                {text ? (
                  <p>
                    Your AI translation will appear here.
                  </p>
                ) : (
                  <div className="empty-result">
                    <div className="empty-icon">
                      <LanguagesIcon />
                    </div>

                    <h3>Your translation appears here</h3>

                    <p>
                      Enter text on the left and LinguaAI will translate it
                      naturally.
                    </p>
                  </div>
                )}
              </div>

              <div className="card-bottom output-actions">
                <div>
                  <button className="icon-button" title="Listen">
                    <Volume2 size={19} />
                  </button>

                  <button
                    className={`icon-button ${saved ? "saved" : ""}`}
                    title="Save translation"
                    onClick={() => setSaved(!saved)}
                  >
                    <Heart
                      size={19}
                      fill={saved ? "currentColor" : "none"}
                    />
                  </button>

                  <button
                    className="icon-button"
                    title="Copy translation"
                    onClick={handleCopy}
                  >
                    <Copy size={19} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Tone controls */}
          <section className="tone-section">
            <div className="tone-title">
              <Sparkles size={16} />
              <span>Translation style</span>
            </div>

            <div className="tone-options">
              {["Natural", "Formal", "Casual", "Professional"].map(
                (option) => (
                  <button
                    key={option}
                    className={tone === option ? "selected" : ""}
                    onClick={() => setTone(option)}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </section>

          {/* Translate button */}
          <div className="translate-action">
            <button
              className="translate-button"
              onClick={handleTranslate}
              disabled={!text.trim()}
            >
              <Sparkles size={19} />
              Translate with AI
            </button>
          </div>

          {/* Quick tools */}
          <section className="quick-tools">
            <div className="quick-tool">
              <Mic size={20} />
              <div>
                <strong>Voice Translation</strong>
                <span>Speak instead of typing</span>
              </div>
            </div>

            <div className="quick-tool">
              <WandSparkles size={20} />
              <div>
                <strong>Improve Writing</strong>
                <span>Rewrite naturally with AI</span>
              </div>
            </div>

            <div className="quick-tool">
              <Volume2 size={20} />
              <div>
                <strong>Pronunciation</strong>
                <span>Listen to the translation</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function LanguagesIcon() {
  return (
    <div className="languages-placeholder">
      <span>文</span>
      <span>A</span>
    </div>
  );
}

export default Translator;

