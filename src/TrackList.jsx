import { useEffect, useState } from "react";

function TrackList() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tracks") // Путь к нашему Python backend
      .then((res) => res.json())
      .then((data) => setTracks(data.tracks));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎵 Моя библиотека</h1>
      {tracks.length === 0 && <p>Нет треков 😢</p>}
      {tracks.map((track, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          {track.cover_file_id && (
            <img
              src={`https://api.telegram.org/file/bot<ТВОЙ_ТОКЕН>/${track.cover_file_id}`}
              alt="cover"
              width={100}
              height={100}
            />
          )}
          <h3>{track.title}</h3>
          <p>👤 {track.performer}</p>
          <p>💿 {track.album || "—"}</p>
          <p>🎭 {track.genre || "—"} | 📅 {track.year || "—"}</p>
          <audio controls src={`https://api.telegram.org/file/bot<ТВОЙ_ТОКЕН>/${track.file_id}`} />
        </div>
      ))}
    </div>
  );
}

export default TrackList;
