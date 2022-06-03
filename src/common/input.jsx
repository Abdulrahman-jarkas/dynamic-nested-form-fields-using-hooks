function Input({ id, label, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} className="form-control" {...rest} />
    </div>
  );
}

export default Input;
