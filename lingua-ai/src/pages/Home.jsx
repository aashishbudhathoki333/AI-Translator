import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>LinguaAI Home</h1>
      <p>This is the Home page.</p>

      <Link to="/translator">Go to Translator</Link>
    </div>
  );
}

export default Home;