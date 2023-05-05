import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useState } from "react";

const EMPTY_TRACK = {};

export function Tracks() {
  // const tracks = exampleTracks;

  const [tracks, setTracks] = useState(exampleTracks);
  // console.log(tracks);
  const [handledTrack, setHandledTrack] = useState(EMPTY_TRACK);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreate = () => {
    setHandledTrack(EMPTY_TRACK);
    handleOpen();
  }

  const handleEdit = (track) => {
    console.log('handleEdit', track);
    setHandledTrack(track);
    handleOpen();
  }

  const handleSubmit = (trackFormData) => {
    // Edit existing track
    if (trackFormData.id) {
      setTracks(
        (prevState) => prevState.map(
            (track) => track.id === trackFormData.id
              ? trackFormData 
              : track
          )
      );
      return;
    }

    // Add new track
    const id = Math.max(...tracks.map(({ id }) => id)) + 1;

    setTracks((prevState) => [
      ...prevState,
      {
        ...trackFormData,
        id,
      },
    ]);
  }

  const handleDelete = (trackId) => {
    setTracks((prevState) => prevState.filter(({ id }) => id !== trackId));
  }

  return (
    <>
      <div className="ui container">
        <button href="#" className="ui right floated green button" id="newModal" onClick={handleCreate}>
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <Track key={track.id} track={track} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
          </tbody>
        </table>
      </div>

      <TrackForm open={open} onClose={handleClose} onSubmit={handleSubmit} trackData={handledTrack} />
    </>
  );
}
