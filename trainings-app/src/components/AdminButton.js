function AdminButton({ onUpdate, onDelete }) {
  return (
    <div className="buttonDiv">
      <button className="updateButton" onClick={onUpdate}>
        Update
      </button>
      <button className="deleteButton" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default AdminButton;
