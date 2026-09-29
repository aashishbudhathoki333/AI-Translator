import { useState, useRef } from "react";
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
  Image as ImageIcon,
  History,
  Star,
  X,
} from "lucide-react";

function Translator() {
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [targetLanguage, setTargetLanguage] = useState("Nepali");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [tone, setTone] = useState("Natural");
  const [copied, setCopied] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [image, setImage] = useState(null);
  const [saved, setSaved] = useState(false);
  const [historySaved, setHistorySaved] = useState(false);

  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);

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
    const previousSource = sourceLanguage;
    const previousTarget = targetLanguage;

    setSourceLanguage(previousTarget);
    setTargetLanguage(previousSource);

    if (translatedText) {
      const previousText = text;

      setText(translatedText);
      setTranslatedText(previousText);
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

    speech.lang =
      targetLanguage === "Nepali"
        ? "ne-NP"
        : targetLanguage === "Hindi"
        ? "hi-IN"
        : targetLanguage === "Spanish"
        ? "es-ES"
        : targetLanguage === "French"
        ? "fr-FR"
        : targetLanguage === "German"
        ? "de-DE"
        : targetLanguage === "Japanese"
        ? "ja-JP"
        : targetLanguage === "Korean"
        ? "ko-KR"
        : "en-US";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  // Voice input
  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser.");
      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang =
      sourceLanguage === "Nepali"
        ? "ne-NP"
        : sourceLanguage === "Hindi"
        ? "hi-IN"
        : sourceLanguage === "Spanish"
        ? "es-ES"
        : sourceLanguage === "French"
        ? "fr-FR"
        : sourceLanguage === "German"
        ? "de-DE"
        : sourceLanguage === "Japanese"
        ? "ja-JP"
        : sourceLanguage === "Korean"
        ? "ko-KR"
        : "en-US";

    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setText((currentText) =>
        currentText ? `${currentText} ${transcript}` : transcript
      );
    };

    recognition.onerror = (event) => {
      console.error("Voice input error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  // Image translation
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setImage({
      file,
      url: imageUrl,
      name: file.name,
    });
  };

  const removeImage = () => {
    if (image?.url) {
      URL.revokeObjectURL(image.url);
    }

    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImageTranslate = () => {
    if (!image) return;

    // OCR + AI translation will be connected later.
    setTranslatedText(
      `Text detected from "${image.name}" will be translated into ${targetLanguage} once image translation is connected.`
    );
  };

  const handleSaveTranslation = () => {
    if (!translatedText) return;

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const handleSaveHistory = () => {
    if (!text || !translatedText) return;

    const historyItem = {
      sourceLanguage,
      targetLanguage,
      text,
      translatedText,
      tone,
      createdAt: new Date().toISOString(),
    };

    const existingHistory = JSON.parse(
      localStorage.getItem("linguaai_history") || "[]"
    );

    localStorage.setItem(
      "linguaai_history",
      JSON.stringify([historyItem, ...existingHistory])
    );

    setHistorySaved(true);

    setTimeout(() => {
      setHistorySaved(false);
    }, 2000);
  };

  return (
    <div className="translator-page">
      <div className="translator-background"></div>

      <div className="translator-container">
        {/* Header */}
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

        {/* Language Toolbar */}
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

        {/* Translation Workspace */}
        <div className="translation-workspace">
          {/* Source */}
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
                <button
                  title={isListening ? "Stop listening" : "Voice input"}
                  className={isListening ? "voice-active" : ""}
                  onClick={handleVoiceInput}
                >
                  <Mic size={19} />
                </button>

                <button
                  title="Translate image"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImageIcon size={19} />
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />

                <span className="character-count">{text.length}/5000</span>
              </div>

              <span className="input-hint">
                {isListening ? "Listening..." : "AI ready"}
              </span>
            </div>
          </div>

          {/* Result */}
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

                <button
                  onClick={handleSaveTranslation}
                  disabled={!translatedText}
                  title="Save translation"
                  className={saved ? "saved-button" : ""}
                >
                  <Star size={18} fill={saved ? "currentColor" : "none"} />
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

        {/* Image Translation Preview */}
        {image && (
          <div className="image-translation-card">
            <div className="image-preview">
              <img src={image.url} alt="Selected translation" />

              <button
                className="remove-image-button"
                onClick={removeImage}
                aria-label="Remove image"
              >
                <X size={16} />
              </button>
            </div>

            <div className="image-translation-content">
              <div>
                <span className="image-label">
                  <ImageIcon size={15} />
                  IMAGE TRANSLATION
                </span>

                <h3>{image.name}</h3>

                <p>
                  Detect text from this image and translate it into{" "}
                  {targetLanguage}.
                </p>
              </div>

              <button
                className="image-translate-button"
                onClick={handleImageTranslate}
              >
                <WandSparkles size={17} />
                Translate Image
              </button>
            </div>
          </div>
        )}

        {/* Controls */}
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

        {/* Save Actions */}
        <div className="translation-save-bar">
          <div className="save-bar-info">
            <Sparkles size={17} />
            <span>
              {translatedText
                ? "Save this translation for later."
                : "Your translations can be saved for later."}
            </span>
          </div>

          <div className="save-bar-actions">
            <button
              onClick={handleSaveHistory}
              disabled={!text || !translatedText}
            >
              {historySaved ? (
                <>
                  <Check size={16} />
                  Saved to History
                </>
              ) : (
                <>
                  <History size={16} />
                  Save to History
                </>
              )}
            </button>

            <button
              onClick={handleSaveTranslation}
              disabled={!translatedText}
            >
              <Star size={16} fill={saved ? "currentColor" : "none"} />
              {saved ? "Saved" : "Save Translation"}
            </button>
          </div>
        </div>

        {/* Quick Tools */}
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

        {/* Tip */}
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
