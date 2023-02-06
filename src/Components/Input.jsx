export default function Input(props) {
  return (
    <>
      <label htmlFor={props.name} style={{ textAlign: "left" }}>
        {props.label}
      </label>
      <input
        onChange={props.onChange}
        name={props.name}
        style={{ height: "25px", borderRadius: "4px" }}
      />
    </>
  );
}
