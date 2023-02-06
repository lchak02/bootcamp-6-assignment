import { useEffect } from "react";
import CustomParagraph from "./CustomParagraph";

export default function SectionRight(props) {
  useEffect(() => {
    console.log(props.inputData);
  }, [props]);

  return (
    <div>
      <CustomParagraph value={props.inputData.name} label={"სახელი"} />
      <CustomParagraph value={props.inputData.surname} label={"გვარი"} />
      <CustomParagraph
        value={props.inputData.aboutus}
        label={"ჩვენ შესახებ(არასავალდებულო)"}
      />
      <CustomParagraph value={props.inputData.email} label={"ელ.ფოსტა"} />
      <CustomParagraph
        value={props.inputData.number}
        label={"მობილურის ნომერი"}
      />
      <CustomParagraph
        value={props.inputData.university}
        label={"სასწავლებელი"}
      />
      <CustomParagraph value={props.inputData.degree} label={"ხარისხი"} />
    </div>
  );
}
