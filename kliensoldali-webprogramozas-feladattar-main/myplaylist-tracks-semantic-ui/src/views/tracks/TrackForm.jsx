import { useEffect, useState } from "react";
import { Modal } from "semantic-ui-react";

/* eslint-disable react/prop-types */
const Field = ({ label, ...inputData }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...inputData} />
    </div>
  );
};

const defaultState = {
  artist: "",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ open, onClose, onSubmit, trackData }) {
  const [formState, setFormState] = useState(defaultState);

  useEffect(() => {
    if (open) {
      // setFormState(defaultState);
      setFormState({
        ...defaultState,
        ...trackData,
      });
    }
  }, [open, trackData]);

  const handleChange = (event) => {
    const { target } = event;

    // console.log(target);
    // console.log(target.name, target.value);

    setFormState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formState.artist.trim().length === 0
      || formState.title.trim().length === 0
      || formState.length.trim().length === 0
      // min:sec
      || !formState.length.match(/\d+:\d+/)
    ) {
      return;
    }

    console.log(formState);
    onSubmit(formState);
    onClose();
  };

  return (
    <Modal as="form" open={open} onClose={onClose} closeIcon>
      <div className="header">Add new Track</div>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="three fields">
              <Field label="Author" placeholder="John Williams" name="artist" value={formState.artist} onChange={handleChange} type="text" required />
              <Field label="Track name" placeholder="Imperial March" name="title" value={formState.title} onChange={handleChange} />
              <Field label="Length" placeholder="3:44" name="length" value={formState.length} onChange={handleChange} />
            </div>
            <div className="three fields">
              <Field label="Spotify URL" placeholder="https://" name="spotifyURL" value={formState.spotifyURL} onChange={handleChange} />
              <Field label="Lyrics URL" placeholder="https://" name="lyricsURL" value={formState.lyricsURL} onChange={handleChange} />
              <Field label="Guitar tab URL" placeholder="https://" name="chordsURL" value={formState.chordsURL} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="ui black deny button" onClick={onClose}>Cancel</div>
        <button className="ui positive right labeled icon button" type="submit" onClick={handleSubmit}>
          Add
          <i className="plus icon"></i>
        </button>
      </div>
    </Modal>
  );
}
