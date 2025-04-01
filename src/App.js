import React from "react";
import TrackList from "./TrackList";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <header style={{ padding: "2rem", textAlign: "center", backgroundColor: "#222", color: "#fff" }}>
        <h1>🎧 My Telegram Music</h1>
        <p style={{ fontStyle: "italic" }}>Слушай MP3 из Telegram в удобном плеере</p>
      </header>
      <main>
        <TrackList />
      </main>
    </div>
  );
}

export default App;
