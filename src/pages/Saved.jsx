import { useState } from "react";
import {
  Search,
  Trash2,
  Copy,
  Check,
  Bookmark,
  Clock3,
  ArrowRight,
} from "lucide-react";

function Saved() {
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      sourceLanguage: "English",
      targetLanguage: "Nepali",
      source: "The world becomes smaller when we understand each other.",
      translation: "जब हामी एकअर्कालाई बुझ्छौं, संसार सानो बन्छ।",
      time: "Saved just now",
    },
    {
      id: 2,
      sourceLanguage: "English",
      targetLanguage: "Hindi",
      source: "Where is the nearest restaurant?",
      translation: "सबसे नज़दीकी रेस्टोरेंट कहाँ है?",
      time: "Saved today",
    },
    {
      id: 3,
      sourceLanguage: "Nepali",
      targetLanguage: "English",
      source: "तपाईंलाई भेटेर खुशी लाग्यो।",
      translation: "It was nice meeting you.",
      time: "Saved yesterday",
    },
    {
      id: 4,
      sourceLanguage: "English",
      targetLanguage: "Japanese",
      source: "Have a great day!",
      translation: "良い一日をお過ごしください！",
      time: "Saved yesterday",
    },
  ]);

  const filteredItems = savedItems.filter((item) => {
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

  const handleRemove = (id) => {
    setSavedItems((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const handleClearAll = () => {
    setSavedItems([]);
  };

  return (
    <div className="saved-page">
      <div className="saved-background"></div>

      <div className="saved-container">
        <div className="saved-header">
          <div>
            <span className="saved-label">YOUR COLLECTION</span>

            <h1>Saved translations.</h1>

            <p>
              Keep your most useful translations close by and access them
              whenever you need them.
            </p>
          </div>

          {savedItems.length > 0 && (
            <button
              className="clear-saved-button"
              onClick={handleClearAll}
            >
              <Trash2 size={16} />
              Clear all
            </button>
          )}
        </div>

        <div className="saved-search">
          <Search size={19} />

          <input
            type="text"
            placeholder="Search your saved translations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button onClick={() => setSearch("")}>
              Clear
            </button>
          )}
        </div>

        <div className="saved-count">
          <div>
            <Bookmark size={15} />
            <span>
              {filteredItems.length}{" "}
              {filteredItems.length === 1
                ? "saved translation"
                : "saved translations"}
            </span>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="saved-list">
            {filteredItems.map((item) => (
              <div className="saved-card" key={item.id}>
                <div className="saved-card-top">
                  <div className="saved-languages">
                    <span>{item.sourceLanguage}</span>

                    <ArrowRight size={15} />

                    <span>{item.targetLanguage}</span>
                  </div>

                  <div className="saved-time">
                    <Clock3 size={14} />
                    {item.time}
                  </div>
                </div>

                <div className="saved-content">
                  <div className="saved-source">
                    <span>SOURCE</span>
                    <p>{item.source}</p>
                  </div>

                  <div className="saved-divider"></div>

                  <div className="saved-translation">
                    <span>TRANSLATION</span>
                    <p>{item.translation}</p>
                  </div>
                </div>

                <div className="saved-card-footer">
                  <div className="saved-status">
                    <Bookmark size={15} />
                    Saved
                  </div>

                  <div className="saved-actions">
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

                    <button onClick={() => handleRemove(item.id)}>
                      <Trash2 size={15} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="saved-empty">
            <div className="saved-empty-icon">
              <Bookmark size={28} />
            </div>

            <h2>
              {search
                ? "No saved translations found"
                : "Nothing saved yet"}
            </h2>

            <p>
              {search
                ? "Try searching for a different word or language."
                : "Save translations you want to quickly access later."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Saved;