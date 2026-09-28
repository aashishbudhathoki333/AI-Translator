import Navbar from "../components/Navbar";

function Saved() {
  return (
    <>
      <Navbar />

      <main className="page-container" style={{ padding: "80px 0" }}>
        <h1>Saved Translations</h1>
        <p>Your saved translations will appear here.</p>
      </main>
    </>
  );
}

export default Saved;