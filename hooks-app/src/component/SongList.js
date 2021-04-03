import React, { useState } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: "almost home", id: 1 },
        { title: "memory gospel", id: 2 },
        { title: "this wild darkness", id: 3 },
    ]);

    const addSongTolist = (title) => {
        setSongs([...songs, { title: title, id: Math.random() }]);
    };

    return (
        <div className="song-list">
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul>
            <NewSongForm addSong={addSongTolist} />
        </div>
    );
};

export default SongList;
