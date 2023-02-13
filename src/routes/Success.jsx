import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cleanUpLocalStorage from "../utils";

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  function handleGoBack() {
    cleanUpLocalStorage();
    navigate("/create");
  }

  useEffect(() => {
    setState(location.state);
    setDataLoaded(true);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F1F1F1",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div>
        <button
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            left: "35px",
            top: "30px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "50%",
            border: "none",
          }}
          type="button"
          onClick={handleGoBack}
        >
          {"<"}
        </button>
      </div>
      {isOpen && (
        <div
          style={{
            width: "280px",
            height: "120px",
            color: "black",
            position: "absolute",
            top: "30px",
            right: "40px",
            border: "1px solid #E4E4E4",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "8px 5px 5px",
            gap: "10px",
            boxShadow: "0px 4px 28px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div>
            <p
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "-10px",
                right: "10px",
                cursor: "pointer",
              }}
            >
              X
            </p>
            <p>რეზიუმე წარმატებით გაიგზავნა</p>
          </div>
        </div>
      )}

      <div
        style={{
          height: "100%",
          width: "600px",
          border: "1px solid white",
          margin: "30px 0px 100px 0px",
          padding: "20px 30px",
          backgroundColor: "white",
          color: "black",
          border: "1px solid #C8C8C8",
          position: "relative",
        }}
      >
        {dataLoaded && (
          <div style={{ borderBottom: "1px solid #C8C8C8", textAlign: "left" }}>
            <div
              style={{
                display: "flex",
                gap: "15px",
                fontSize: "25px",
                color: "#F93B1D",
              }}
            >
              <p>{state.generalData.name.value}</p>
              <p>{state.generalData.surname.value}</p>
            </div>
            <div>
              {state.generalData.image.value && (
                <img
                  src={state.generalData.image.value}
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
            <div style={{ width: "400px" }}>
              <p>{state.generalData.email.value}</p>
              <p>{state.generalData.number.value}</p>
              <p>{state.generalData.aboutus.value}</p>
            </div>
          </div>
        )}
        {dataLoaded &&
          state.experienceData.map((data, index) => {
            return (
              <div
                style={{
                  borderBottom: "1px solid #C8C8C8",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    display: "flex",
                    color: "#F93B1D",
                  }}
                >
                  გამოცდილება
                </h3>
                <div style={{ display: "flex", gap: "20px" }}>
                  <p>{data.position.value}</p>
                  <p>{data.employee.value}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    opacity: "0.5",
                    fontSize: "16px",
                  }}
                >
                  <p>{data.started_date.value}</p>
                  <p>{data.ended_date.value}</p>
                </div>
                <p>{data.description.value}</p>
              </div>
            );
          })}
        {dataLoaded &&
          state.educationData.map((data, index) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  <h3 style={{ color: "#F93B1D", display: "flex" }}>
                    განათლება
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <p>{data.university.value}</p>
                      <p>{data.degree.value}</p>
                    </div>
                    <div>
                      <p style={{ opacity: "0.5", fontSize: "16px" }}>
                        {data.endeddate.value}
                      </p>
                      <p>{data.edudescription.value}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
