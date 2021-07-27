const Form = ({ temp, setTemp, handleClick }) => {
  return (
    <div className="task-form">
      <div id="input-box">
        <input
          placeholder="New Task"
          value={temp}
          onChange={(e) => {
            setTemp(e.target.value);
          }}
        />
      </div>
      <button id="btn" onClick={handleClick}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default Form;
