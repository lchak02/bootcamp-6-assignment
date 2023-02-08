export default function Header(props) {
  function renderStage() {
    switch (props.stage) {
      case 1:
        return "პირადი ინფო";
      case 2:
        return "გამოცდილება";
      case 3:
        return "განათლება";
    }
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>{renderStage()}</h1>
      <span>{props.stage} / 3</span>
    </div>
  );
}
