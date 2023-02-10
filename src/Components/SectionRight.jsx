import { useEffect } from "react";
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
          <CustomParagraph value={props.inputData.personalImage} />
        </div>
        <div style={{ borderBottom: "1px solid black" }}>
          <CustomParagraph value={props.inputData.email} />
          <CustomParagraph value={props.inputData.number} />
          <CustomParagraph value={props.inputData.aboutus} />
        </div>

        {props.experienceData.map((elem, index) => {
          return (
            <div key={index} style={{ borderBottom: "1px solid black" }}>
              <CustomParagraph value={elem.position.value} />
              <CustomParagraph value={elem.employee.value} />
              <div style={{ display: "flex", gap: "10px" }}>
                <CustomParagraph value={elem.started_date.value} />
                <CustomParagraph value={elem.ended_date.value} />
              </div>
              <CustomParagraph value={elem.description.value} />
            </div>
          );
        })}

        {props.educationData.map((elem, index) => {
          return (
            <div key={index}>
              <div style={{ display: "flex", gap: "10px" }}>
                <CustomParagraph value={elem.university.value} />
                <CustomParagraph value={elem.degree.value} />
              </div>
              <CustomParagraph value={elem.endeddate.value} />
              <CustomParagraph value={elem.edudescription.value} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
