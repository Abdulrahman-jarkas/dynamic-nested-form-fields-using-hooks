function Button({ label, btnClass, ...rest }) {
  return (
    <button className={"btn " + btnClass} type="button" {...rest}>
      {label}
    </button>
  );
}

export default Button;
