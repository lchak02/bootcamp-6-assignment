import Input from "./Input";

export default function SectionLeft(props) {
  return (
    <form
      style={{
        width: "700px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "260px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input onChange={props.onChange} name={"name"} label={"სახელი"} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input onChange={props.onChange} name={"surname"} label={"გვარი"} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            onChange={props.onChange}
            name={"aboutus"}
            label={"ჩვენ შესახებ(არასავალდებულო)"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input onChange={props.onChange} name={"email"} label={"ელ.ფოსტა"} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            onChange={props.onChange}
            name={"number"}
            label={"მობილურის ნომერი"}
          />
        </div>
      </div>
    </form>
  );
}
