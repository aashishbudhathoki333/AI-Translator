import { useState } from "react";
import {
  ArrowLeftRight,
  Copy,
  Check,
  Volume2,
  Mic,
  Sparkles,
  ChevronDown,
  RotateCcw,
  Languages,
  WandSparkles,
} from "lucide-react";

function Translator() {
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [targetLanguage, setTargetLanguage] = useState("Nepali");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [tone, setTone] = useState("Natural");
  const [copied, setCopied] = useState(false);

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

  const tones = ["Natural", "Formal", "Casual", "Professional"];

  const handleSwap = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);

    if (translatedText) {
      setText(translatedText);
      setTranslatedText(text);
    }
  };

  const handleTranslate = () => {
    if (!text.trim()) {
      setTranslatedText("");
      return;
    }

    // Temporary UI translation.
    // Real AI translation will be connected later.
    setTranslatedText(
      `Your ${targetLanguage} translation will appear here once AI translation is connected.`
    );
  };

  const handleCopy = async () => {
    if (!translatedText) return;

    try {
      await navigator.clipboard.writeText(translatedText);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleClear = () => {
    setText("");
    setTranslatedText("");
    setCopied(false);
  };

  const handleListen = () => {
    if (!translatedText || !window.speechSynthesis) return;

    const speech = new SpeechSynthesisUtterance(translatedText);
    speech.lang = targetLanguage === "Nepali" ? "ne-NP" : "en-US";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="translator-page">
      <div className="translator-background"></div>

      <div className="translator-container">
        <div className="translator-heading">
          <div className="translator-title">
            <div className="translator-title-icon">
              <Languages size={22} />
            </div>

            <div>
              <span className="translator-label">AI TRANSLATOR</span>
              <h1>Translate anything.</h1>
            </div>
          </div>

          <p>
            Translate your words naturally with LinguaAI. Choose your
            languages, enter your text, and let AI handle the rest.
          </p>
        </div>

        <div className="translator-toolbar">
          <div className="language-selector">
            <span>FROM</span>

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

            <ChevronDown size={17} />
          </div>

          <button
            className="swap-button"
            onClick={handleSwap}
            aria-label="Swap languages"
          >
            <ArrowLeftRight size={19} />
          </button>

          <div className="language-selector">
            <span>TO</span>

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

            <ChevronDown size={17} />
          </div>
        </div>

        <div className="translation-workspace">
          <div className="translation-panel source-panel">
            <div className="panel-header">
              <div className="panel-language">
                <span className="active-language-dot"></span>
                {sourceLanguage}
              </div>

              <button
                className="clear-button"
                onClick={handleClear}
                disabled={!text}
              >
                <RotateCcw size={15} />
                Clear
              </button>
            </div>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here..."
              maxLength={5000}
            />

            <div className="panel-footer">
              <div className="input-tools">
                <button title="Voice input">
                  <Mic size={19} />
                </button>

                <span className="character-count">
                  {text.length}/5000
                </span>
              </div>

              <span className="input-hint">AI ready</span>
            </div>
          </div>

          <div className="translation-panel result-panel">
            <div className="panel-header">
              <div className="panel-language">
                <span className="target-language-dot"></span>
                {targetLanguage}
              </div>

              <div className="result-actions">
                <button
                  onClick={handleListen}
                  disabled={!translatedText}
                  title="Listen"
                >
                  <Volume2 size={18} />
                </button>

                <button
                  onClick={handleCopy}
                  disabled={!translatedText}
                  title="Copy translation"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <div className="translation-result">
              {translatedText ? (
                <p>{translatedText}</p>
              ) : (
                <div className="result-placeholder">
                  <div className="result-placeholder-icon">
                    <Sparkles size={25} />
                  </div>

                  <h3>Your translation will appear here</h3>

                  <p>
                    Enter some text on the left and click{" "}
                    <strong>Translate with AI</strong>.
                  </p>
                </div>
              )}
            </div>

            <div className="panel-footer">
              <span className="translation-status">
                <span></span>
                AI translation
              </span>

              <span className="tone-display">{tone} tone</span>
            </div>
          </div>
        </div>

        <div className="translator-controls">
          <div className="tone-control">
            <span>TONE</span>

            <div className="tone-options">
              {tones.map((item) => (
                <button
                  key={item}
                  className={tone === item ? "selected" : ""}
                  onClick={() => setTone(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            className="translate-button"
            onClick={handleTranslate}
            disabled={!text.trim()}
          >
            <WandSparkles size={19} />
            Translate with AI
          </button>
        </div>

        <div className="quick-tools">
          <div className="quick-tools-heading">
            <Sparkles size={16} />
            <span>QUICK TOOLS</span>
          </div>

          <div className="quick-tools-grid">
            <button onClick={() => setTone("Professional")}>
              <span>✦</span>
              Make professional
            </button>

            <button onClick={() => setTone("Casual")}>
              <span>✧</span>
              Make casual
            </button>

            <button onClick={() => setText(text.toUpperCase())}>
              <span>A</span>
              Uppercase
            </button>

            <button onClick={() => setText(text.toLowerCase())}>
              <span>a</span>
              Lowercase
            </button>
          </div>
        </div>

        <div className="translator-tip">
          <Sparkles size={16} />
          <span>
            <strong>Tip:</strong> For the most natural results, provide
            complete sentences and enough context.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Translator;