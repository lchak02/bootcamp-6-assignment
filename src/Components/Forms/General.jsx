import { useEffect, useState } from "react";
import Input from "../Input";
import { GENERAL_INFO_INITIAL } from "../../constants";

export default function General(props) {
  const [inputData, setInputData] = useState(GENERAL_INFO_INITIAL);

  useEffect(() => {
    setInputData(props.generalData);
  }, []);

  useEffect(() => {
    for (const key in inputData) {
      if (!inputData[key].isValid) {
        props.setAllValid(false);
        return;
      }
    }

    props.setAllValid(true);
  }, [inputData]);

  function onChange(inputName, inputValue, isValid) {
    let newInputData = {
      ...inputData,
      [inputName]: { value: inputValue, isValid: isValid },
    };

    setInputData(newInputData);
    props.updateGeneralData(newInputData);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "260px" }}>
        <Input
          onChange={onChange}
          name={"name"}
          label={"სახელი"}
          type={"text"}
          pattern="^[ა-ჰ]+$"
          minLength={2}
          value={inputData.name.value}
        />
        <Input
          onChange={onChange}
          name={"surname"}
          label={"გვარი"}
          type={"text"}
          pattern="^[ა-ჰ]+$"
          minLength={2}
          value={inputData.surname.value}
        />
      </div>
      {/* <ImageUpload
        onChange={onChange}
        name={"personalImage"}
        label={"პირადი ფოტოს ატვირთვა"}
        type={"file"}
        accept={"image/*"}
      /> */}

      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Input
          onChange={onChange}
          name={"aboutus"}
          label={"ჩემ შესახებ(არასავალდებულო)"}
          type={"text"}
          value={inputData.aboutus.value}
        />

        <Input
          onChange={onChange}
          name={"email"}
          label={"ელ.ფოსტა"}
          type={"text"}
          pattern="^[a-zA-Z0-9.]+@redberry.ge$"
          value={inputData.email.value}
        />

        <Input
          onChange={onChange}
          name={"number"}
          label={"მობილურის ნომერი"}
          type={"text"}
          pattern="^(\+?995)?(79\d{7}|5\d{8})$"
          value={inputData.number.value}
        />
      </div>
    </>
  );
}
