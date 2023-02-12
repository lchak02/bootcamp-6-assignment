import CustomParagraph from "./CustomParagraph";

export default function SectionRight(props) {
  return (
    <div
      style={{
        width: "45%",
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
        <div>
          {props.generalData.image.value && (
            <img
              src={props.generalData.image.value}
              style={{
                width: "206px",
                height: "206px",
                borderRadius: "50%",
                objectFit: "cover",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            fontSize: "25px",
            color: "#F93B1D",
            position: "relative",
            fontWeight: "700",
            fontSize: "30px",
          }}
        >
          <CustomParagraph value={props.generalData.name.value} />
          <CustomParagraph value={props.generalData.surname.value} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "250px",
            maxWidth: "100px",
          }}
        >
          <div style={{ display: "flex" }}>
            <CustomParagraph value={props.generalData.email.value} />
          </div>
          <div style={{ display: "flex" }}>
            <CustomParagraph value={props.generalData.number.value} />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <CustomParagraph value={props.generalData.aboutus.value} />
          </div>
        </div>

        {props.experienceData.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", gap: "15px", fontSize: "20px" }}>
                <CustomParagraph value={data.position.value} />
                <CustomParagraph value={data.employee.value} />
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <CustomParagraph value={data.started_date.value} />
                <CustomParagraph value={data.ended_date.value} />
              </div>
              <div style={{ display: "flex" }}>
                <CustomParagraph value={data.description.value} />
              </div>
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
