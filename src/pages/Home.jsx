
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Languages,
  Mic,
  Image,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  Play,
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: Languages,
      title: "Smart Translation",
      description:
        "Translate text naturally while preserving the meaning and context of your words.",
    },
    {
      icon: Mic,
      title: "Voice Translation",
      description:
        "Speak naturally and turn your voice into accurate translations in seconds.",
    },
    {
      icon: Image,
      title: "Image Translation",
      description:
        "Extract and translate text from signs, documents, menus, and images.",
    },
    {
      icon: MessageCircle,
      title: "Conversation Mode",
      description:
        "Have smooth multilingual conversations without constantly switching apps.",
    },
  ];

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

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background"></div>

        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>AI-POWERED LANGUAGE PLATFORM</span>
            </div>

            <h1>
              Speak freely.
              <br />
              <span>Understand everyone.</span>
            </h1>

            <p className="hero-description">
              Break language barriers with intelligent translation powered by
              AI. Translate text, voice, images, and conversations naturally.
            </p>

            <div className="hero-buttons">
              <Link to="/translator" className="primary-button">
                Start Translating
                <ArrowRight size={19} />
              </Link>

              <button className="secondary-button">
                <Play size={17} />
                See how it works
              </button>
            </div>

            <div className="hero-trust">
              <div>
                <strong>100+</strong>
                <span>Languages</span>
              </div>

              <div className="trust-divider"></div>

              <div>
                <strong>AI</strong>
                <span>Powered</span>
              </div>

              <div className="trust-divider"></div>

              <div>
                <strong>24/7</strong>
                <span>Available</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-preview"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="preview-glow"></div>

            <div className="translation-card">
              <div className="translation-top">
                <div className="language-label">
                  <span className="language-dot"></span>
                  English
                </div>

                <span className="preview-label">LINGUAAI</span>
              </div>

              <p className="source-text">
                "The world becomes smaller when we understand each other."
              </p>

              <div className="translation-divider">
                <span></span>
                <Languages size={18} />
                <span></span>
              </div>

              <div className="language-label">
                <span className="language-dot target"></span>
                Nepali
              </div>

              <p className="translated-text">
                "जब हामी एकअर्कालाई बुझ्छौं, संसार सानो बन्छ।"
              </p>

              <div className="ai-status">
                <Sparkles size={14} />
                <span>AI translation</span>
                <span className="status-dot"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="language-section">
        <p>Translate naturally across languages</p>

        <div className="language-list">
          {languages.map((language) => (
            <span key={language}>{language}</span>
          ))}
        </div>
      </section>

      <section className="features-section">
        <div className="section-container">
          <div className="section-heading">
            <div className="section-label">
              <Sparkles size={15} />
              POWERFUL AI TOOLS
            </div>

            <h2>
              More than just
              <br />
              <span>translation.</span>
            </h2>

            <p>
              LinguaAI gives you everything you need to communicate naturally
              across languages.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  className="feature-card"
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="feature-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <Link to="/translator">
                    Explore
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="section-container">
          <div className="how-content">
            <div className="section-label">
              <Zap size={15} />
              SIMPLE & FAST
            </div>

            <h2>
              Translation should
              <br />
              <span>just work.</span>
            </h2>

            <p>
              No complicated setup. Enter your text, choose your language, and
              let LinguaAI handle the rest.
            </p>

            <Link to="/translator" className="primary-button">
              Try LinguaAI
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <div>
                <h3>Choose languages</h3>
                <p>Select the language you're translating from and to.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <div>
                <h3>Enter your message</h3>
                <p>Type, speak, or upload an image containing your text.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <div>
                <h3>Get your translation</h3>
                <p>Receive a natural, context-aware AI translation instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-item">
            <ShieldCheck size={23} />
            <div>
              <strong>Privacy focused</strong>
              <span>Your conversations stay yours.</span>
            </div>
          </div>

          <div className="trust-item">
            <Globe2 size={23} />
            <div>
              <strong>Built for everyone</strong>
              <span>Communicate without borders.</span>
            </div>
          </div>

          <div className="trust-item">
            <Zap size={23} />
            <div>
              <strong>Lightning fast</strong>
              <span>Get results in seconds.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <Sparkles size={28} />

          <h2>
            Ready to break
            <br />
            <span>language barriers?</span>
          </h2>

          <p>
            Start translating with LinguaAI and discover a smarter way to
            communicate.
          </p>

          <Link to="/translator" className="primary-button">
            Start Translating
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
