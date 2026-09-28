import { Link } from "react-router-dom";

function Translator() {
  return (
    <div>
      <h1>LinguaAI Translator</h1>
      <p>This is the Translator page.</p>

      <Link to="/">Go back Home</Link>
    </div>
  );
}

export default Translator;