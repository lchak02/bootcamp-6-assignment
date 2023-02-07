import { useEffect } from "react";
import CustomParagraph from "./CustomParagraph";

export default function SectionRight(props) {
  useEffect(() => {
    console.log(props.inputData);
  }, [props]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <CustomParagraph value={props.inputData.name} label={"სახელი"} />
        <CustomParagraph value={props.inputData.surname} label={"გვარი"} />
      </div>
      <CustomParagraph
        value={props.inputData.aboutus}
        label={"ჩვენ შესახებ(არასავალდებულო)"}
      />
      <CustomParagraph value={props.inputData.email} label={"ელ.ფოსტა"} />
      <CustomParagraph
        value={props.inputData.number}
        label={"მობილურის ნომერი"}
      />
      <CustomParagraph value={props.inputData.position} label={"თანამდებობა"} />
      <CustomParagraph
        value={props.inputData.employee}
        label={"დამსაქმებელი"}
      />
      <CustomParagraph
        value={props.inputData.started_date}
        label={"დაწყების რიცხვი"}
      />
      <CustomParagraph
        value={props.inputData.ended_date}
        label={"დამთავრების რიცხვი"}
      />
      <CustomParagraph value={props.inputData.description} label={"აღწერა"} />
      <CustomParagraph
        value={props.inputData.university}
        label={"სასწავლებელი"}
      />
      <CustomParagraph value={props.inputData.degree} label={"ხარისხი"} />
      <CustomParagraph
        value={props.inputData.ended_date}
        label={"დამთავრების რიცხვი"}
      />
      <CustomParagraph value={props.inputData.description} label={"აღწერა"} />
    </div>
  );
}
