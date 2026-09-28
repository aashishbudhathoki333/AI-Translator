import { useState } from "react";
import {
  Search,
  Trash2,
  Copy,
  Check,
  Languages,
  Clock3,
  MoreHorizontal,
} from "lucide-react";

function History() {
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const [history, setHistory] = useState([
    {
      id: 1,
      sourceLanguage: "English",
      targetLanguage: "Nepali",
      source: "The world becomes smaller when we understand each other.",
      translation: "जब हामी एकअर्कालाई बुझ्छौं, संसार सानो बन्छ।",
      time: "Just now",
    },
    {
      id: 2,
      sourceLanguage: "English",
      targetLanguage: "Hindi",
      source: "Where is the nearest restaurant?",
      translation: "सबसे नज़दीकी रेस्टोरेंट कहाँ है?",
      time: "Today, 10:42 AM",
    },
    {
      id: 3,
      sourceLanguage: "Nepali",
      targetLanguage: "English",
      source: "तपाईंलाई भेटेर खुशी लाग्यो।",
      translation: "It was nice meeting you.",
      time: "Yesterday, 6:18 PM",
    },
    {
      id: 4,
      sourceLanguage: "English",
      targetLanguage: "Japanese",
      source: "Have a great day!",
      translation: "良い一日をお過ごしください！",
      time: "Yesterday, 2:05 PM",
    },
  ]);

  const filteredHistory = history.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.source.toLowerCase().includes(query) ||
      item.translation.toLowerCase().includes(query) ||
      item.sourceLanguage.toLowerCase().includes(query) ||
      item.targetLanguage.toLowerCase().includes(query)
    );
  });

  const handleCopy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.translation);
      setCopiedId(item.id);

      setTimeout(() => {
        setCopiedId(null);
      }, 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleDelete = (id) => {
    setHistory((current) => current.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setHistory([]);
  };

  return (
    <div className="history-page">
      <div className="history-background"></div>

      <div className="history-container">
        <div className="history-header">
          <div>
            <span className="history-label">YOUR ACTIVITY</span>

            <h1>Translation history.</h1>

            <p>
              Find your previous translations and quickly reuse anything you've
              translated before.
            </p>
          </div>

          {history.length > 0 && (
            <button className="clear-history-button" onClick={handleClearAll}>
              <Trash2 size={16} />
              Clear all
            </button>
          )}
        </div>

        <div className="history-search">
          <Search size={19} />

          <input
            type="text"
            placeholder="Search your translation history..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button onClick={() => setSearch("")}>
              Clear
            </button>
          )}
        </div>

        <div className="history-count">
          <div>
            <Clock3 size={15} />
            <span>
              {filteredHistory.length}{" "}
              {filteredHistory.length === 1 ? "translation" : "translations"}
            </span>
          </div>
        </div>

        {filteredHistory.length > 0 ? (
          <div className="history-list">
            {filteredHistory.map((item) => (
              <div className="history-card" key={item.id}>
                <div className="history-card-top">
                  <div className="history-languages">
                    <span>{item.sourceLanguage}</span>

                    <Languages size={15} />

                    <span>{item.targetLanguage}</span>
                  </div>

                  <div className="history-time">
                    {item.time}

                    <button className="history-more">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </div>

                <div className="history-content">
                  <div className="history-source">
                    <span>SOURCE</span>
                    <p>{item.source}</p>
                  </div>

                  <div className="history-arrow">→</div>

                  <div className="history-translation">
                    <span>TRANSLATION</span>
                    <p>{item.translation}</p>
                  </div>
                </div>

                <div className="history-card-footer">
                  <span className="history-ai">
                    <span></span>
                    AI translated
                  </span>

                  <div className="history-actions">
                    <button onClick={() => handleCopy(item)}>
                      {copiedId === item.id ? (
                        <>
                          <Check size={15} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={15} />
                          Copy
                        </>
                      )}
                    </button>

                    <button onClick={() => handleDelete(item.id)}>
                      <Trash2 size={15} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="history-empty">
            <div className="history-empty-icon">
              <Clock3 size={28} />
            </div>

            <h2>
              {search ? "No translations found" : "Your history is empty"}
            </h2>

            <p>
              {search
                ? "Try searching for a different word or language."
                : "Your translations will appear here after you start using LinguaAI."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default History;