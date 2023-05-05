/* eslint-disable react/prop-types */
export function Track({ track, onDelete, onEdit }) {
  const handleDelete = () => {
    onDelete(track.id);
  }

  const handleEdit = () => {
    onEdit(track);
  }

  return (
    <tr>
      <td>
        <i className="user icon"></i> {track.artist}
      </td>
      <td>
        <i className="music icon"></i> {track.title}
      </td>
      <td className="right aligned collapsing">
        <button className="ui icon button" onClick={handleEdit} >
          <i className="edit icon"></i>
        </button>
        <button className="ui icon button red" onClick={handleDelete} >
          <i className="trash icon"></i>
        </button>
      </td>
    </tr>
  );
}
