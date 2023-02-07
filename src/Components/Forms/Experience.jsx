import Input from "../Input";

export default function Experience(props) {
  return (
    <>
      <Input
        onChange={props.onChange}
        name={"position"}
        label={"თანამდებობა"}
      />
      <Input
        onChange={props.onChange}
        name={"employee"}
        label={"დამსაქმებელი"}
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "260px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            onChange={props.onChange}
            name={"started_date"}
            label={"დაწყების რიცხვი"}
            type="date"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            onChange={props.onChange}
            name={"ended_date"}
            label={"დამთავრების რიცხვი"}
            type="date"
          />
        </div>
      </div>
      <Input onChange={props.onChange} name={"description"} label={"აღწერა"} />
    </>
  );
}
