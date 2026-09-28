import Navbar from "../components/Navbar";

function Settings() {
  return (
    <>
      <Navbar />

      <main className="page-container" style={{ padding: "80px 0" }}>
        <h1>Settings</h1>
        <p>Your app settings will appear here.</p>
      </main>
    </>
  );
}

export default Settings;