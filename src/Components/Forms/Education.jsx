import Input from "../Input";

export default function Education(props) {
  return (
    <>
      <Input
        onChange={props.onChange}
        name={"university"}
        label={"სასწავლებელი"}
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "260px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input onChange={props.onChange} name={"degree"} label={"ხარისხი"} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            onChange={props.onChange}
            name={"endeddate"}
            label={"დამთავრების რიცხვი"}
            type="date"
          />
        </div>
      </div>
      <Input
        onChange={props.onChange}
        name={"edudescription"}
        label={"აღწერა"}
      />
    </>
  );
}
