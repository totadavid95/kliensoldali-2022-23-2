import cn from "classnames";
import { Link } from "react-router-dom";

export function TrackList({ playlist }) {
  return (
    <>
      <h3>{playlist.title}</h3>
      <div className="ui very relaxed selection list">
        {playlist.tracks.map(track => (
          <Link to={`/playlists/${playlist.id}/${track.id}`} key={track.id} className={cn("item", { active: false })}>
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <div className="header">{track.title}</div>
              <div className="description">{track.artist}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
