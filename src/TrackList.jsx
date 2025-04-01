import { useEffect, useState } from "react";

function TrackList() {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = "https://3d1b-38-180-36-244.ngrok-free.app";

  useEffect(() => {
    fetch(`${API_URL}/tracks`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setTracks(data.tracks))
      .catch((err) => {
        console.error("Ошибка загрузки треков:", err);
        setError("Не удаётся загрузить треки. Проверь API-сервер.");
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎵 Моя библиотека</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {tracks.length === 0 && !error && <p>Пока что нет треков 😢</p>}

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
              src={`${API_URL}/cover/${track.cover_file_id}`}
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
          <audio controls src={`${API_URL}/audio/${track.file_id}`} />
        </div>
      ))}
    </div>
  );
}

export default TrackList;
