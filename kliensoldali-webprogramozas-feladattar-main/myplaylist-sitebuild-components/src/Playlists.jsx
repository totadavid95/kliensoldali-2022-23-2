import { useState } from "react";
import { examplePlaylists } from "../sitebuild/domain/playlist";
import classNames from "classnames";

export function Playlists() {
    // Itt eltároljuk az aktuálisan aktív playlist-et
    const [currentPlaylist, setCurrentPlaylist] = useState(1);

    // Itt pedig kikeressük a "db-ből"
    const playlist = examplePlaylists.find(({ id }) => id === currentPlaylist);

    console.log(playlist);

    return (
        <>
            <h1>My Playlists</h1>
            <div className="ui stackable two column grid">
                <div className="ui six wide column">
                    <h3>Playlists</h3>
                    <div className="ui very relaxed selection list">
                        {examplePlaylists.map((p, idx) => (
                            <div
                                className={classNames("item", { active: currentPlaylist === p.id })}
                                key={idx}
                                onClick={
                                    () => { 
                                        // console.log(p.id);
                                        // currentPlaylist = p.id;
                                        setCurrentPlaylist(p.id);
                                        // console.log(currentPlaylist);
                                    }
                                }
                            >
                                <i className="large compact disc middle aligned icon"></i>
                                <div className="content">
                                    <a className="header">{p.title}</a>
                                    <div className="description">{p.tracks.length} tracks</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ui ten wide column">
                    <h3>Classics</h3>
                    <div className="ui very relaxed selection list">
                        {playlist.tracks.map((track, idx) => (
                            <div className="item" key={idx}>
                                <i className="large music middle aligned icon"></i>
                                <div className="content">
                                    <a className="header">{track.title}</a>
                                    <div className="description">{track.artist}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
