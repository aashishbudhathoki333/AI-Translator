
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mic,
  Camera,
  MessageCircle,
  Sparkles,
  Languages,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";

function Home() {
  const features = [
    {
      icon: Languages,
      title: "Smart Translation",
      text: "Translate naturally with AI that understands context, tone and meaning.",
    },
    {
      icon: Mic,
      title: "Voice Translation",
      text: "Speak naturally and let LinguaAI translate your words instantly.",
    },
    {
      icon: Camera,
      title: "Image Translation",
      text: "Point your camera at signs, menus or documents and translate them.",
    },
    {
      icon: MessageCircle,
      title: "Conversation Mode",
      text: "Have a real-time conversation across different languages.",
    },
  ];

  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="page-container hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles size={15} />
              AI-powered language experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              Speak freely.
              <br />
              <span>Understand everyone.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Translate text, voice and images with an AI that understands
              context—not just words.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
            >
              <Link to="/translator" className="primary-button">
                Start translating
                <ArrowRight size={18} />
              </Link>

              <a href="#features" className="secondary-button">
                Explore features
              </a>
            </motion.div>

            <div className="hero-trust">
              <span>
                <ShieldCheck size={16} />
                Privacy focused
              </span>

              <span>
                <Zap size={16} />
                Fast AI responses
              </span>

              <span>
                <Languages size={16} />
                Multiple languages
              </span>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="page-container">
            <div className="section-heading">
              <span>POWERED BY AI</span>
              <h2>More than a translator.</h2>
              <p>
                Everything you need to understand and communicate across
                languages.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    className="feature-card"
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="feature-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>

                    <Link to="/translator">
                      Try it <ArrowRight size={15} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
