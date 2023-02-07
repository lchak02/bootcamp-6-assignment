export default function Input(props) {
  const isGeorgianText = (text) => {
    let geoAlph = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";
    for (let char of text) {
      if (!geoAlph.includes(char)) {
        return false;
      }
    }
    return true;
  };

  function onChange(event) {
    let target = event.target;

    let inputName = target.name;
    let inputValue = target.value;

    let isValid = inputValue.length > 2 && isGeorgianText(inputValue);

    props.onChange(inputName, inputValue, isValid);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={props.name} style={{ textAlign: "left" }}>
        {props.label}
      </label>
      <input
        onChange={onChange}
        name={props.name}
        style={{ height: "25px", borderRadius: "4px" }}
        type={props.type}
      />
    </div>
  );
}
