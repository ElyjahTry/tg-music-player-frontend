import { useEffect, useState } from "react";

function TrackList() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data.tracks));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎵 Моя библиотека</h1>
      {tracks.length === 0 && <p>Нет треков 😢</p>}
      {tracks.map((track, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "10px",
            background: "#fff",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          {track.cover_file_id && (
            <img
              src={`http://localhost:5050/cover/${track.cover_file_id}`}
              alt="cover"
              width={100}
              height={100}
              style={{ borderRadius: "8px", marginBottom: "10px" }}
            />
          )}
          <h3>{track.title}</h3>
          <p>👤 {track.performer}</p>
          <p>💿 {track.album || "—"}</p>
          <p>🎭 {track.genre || "—"} | 📅 {track.year || "—"}</p>
          <audio controls src={`http://localhost:5050/audio/${track.file_id}`} />
        </div>
      ))}
    </div>
  );
}

export default TrackList;
