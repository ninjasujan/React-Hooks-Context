import React, { useState, useEffect } from "react";

const NewSongForm = (props) => {
    const [song, setSong] = useState("");

    const onSubmitSong = (e) => {
        e.preventDefault();
        console.log(song);
        props.addSong(song);
        setSong("");
    };

    useEffect(() => {
        console.log("Use effect for song data");
    }, [song]);

    return (
        <div>
            <form onSubmit={onSubmitSong}>
                <label>Song </label>
                <input
                    type="text"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                    required
                />
                <button>Add Song</button>
            </form>
        </div>
    );
};

export default NewSongForm;
