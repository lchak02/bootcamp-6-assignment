import CustomParagraph from "./CustomParagraph";

export default function SectionRight(props) {
  return (
    <div
      style={{
        width: "25%",
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
          <CustomParagraph value={props.generalData.name.value} />
          <CustomParagraph value={props.generalData.surname.value} />
          <img
            src={props.generalData.image.value}
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ borderBottom: "1px solid black" }}>
          <CustomParagraph value={props.generalData.email.value} />
          <CustomParagraph value={props.generalData.number.value} />
          <CustomParagraph value={props.generalData.aboutus.value} />
        </div>

        {props.experienceData.map((data, index) => {
          return (
            <div key={index} style={{ borderBottom: "1px solid black" }}>
              <CustomParagraph value={data.position.value} />
              <CustomParagraph value={data.employee.value} />
              <div style={{ display: "flex", gap: "10px" }}>
                <CustomParagraph value={data.started_date.value} />
                <CustomParagraph value={data.ended_date.value} />
              </div>
              <CustomParagraph value={data.description.value} />
            </div>
          );
        })}

        {props.educationData.map((data, index) => {
          return (
            <div key={index}>
              <div style={{ display: "flex", gap: "10px" }}>
                <CustomParagraph value={data.university.value} />
                <CustomParagraph value={data.degree.value} />
              </div>
              <CustomParagraph value={data.endeddate.value} />
              <CustomParagraph value={data.edudescription.value} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
