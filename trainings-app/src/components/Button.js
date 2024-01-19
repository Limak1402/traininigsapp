function Button({ label, onClick }) {
  return (
    <div className="buttonDiv">
      <button className="registerOrangeButton" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
