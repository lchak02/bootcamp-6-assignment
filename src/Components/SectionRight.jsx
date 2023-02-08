import CustomParagraph from "./CustomParagraph";

export default function SectionRight(props) {
  return (
    <div
      style={{
        width: "802px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          color: "black",
          height: "100%",
          padding: "0px 40px 0px 40px ",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            fontSize: "25px",
            color: "#F93B1D",
          }}
        >
          <CustomParagraph value={props.inputData.name} />
          <CustomParagraph value={props.inputData.surname} />
        </div>
        <div style={{ borderBottom: "1px solid black" }}>
          <CustomParagraph value={props.inputData.email} />
          <CustomParagraph value={props.inputData.number} />
          <CustomParagraph value={props.inputData.aboutus} />
        </div>
        <div style={{ borderBottom: "1px solid black" }}>
          <CustomParagraph value={props.inputData.position} />
          <CustomParagraph value={props.inputData.employee} />
          <div style={{ display: "flex", gap: "10px" }}>
            <CustomParagraph value={props.inputData.started_date} />
            <CustomParagraph value={props.inputData.ended_date} />
          </div>
          <CustomParagraph value={props.inputData.description} />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <CustomParagraph value={props.inputData.university} />
          <CustomParagraph value={props.inputData.degree} />
        </div>
        <CustomParagraph value={props.inputData.endeddate} />
        <CustomParagraph value={props.inputData.edudescription} />
      </div>
    </div>
  );
}
