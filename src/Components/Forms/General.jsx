import { useEffect, useState } from "react";
import Input from "../Input";
import { GENERAL_INFO_INITIAL } from "../../constants";

export default function General(props) {
  const [inputData, setInputData] = useState(GENERAL_INFO_INITIAL);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (!isDataLoaded) {
      setInputData(props.generalData);
      setIsDataLoaded(!isDataLoaded);
    } else {
      let newInputData = { ...inputData };

      Object.keys(newInputData).forEach(function (key) {
        if (
          props.triggerValidation == true &&
          newInputData[key].isValid == null
        ) {
          newInputData[key].isValid = false;
        }
      });

      setInputData(newInputData);
    }
  }, [props.triggerValidation]);

  useEffect(() => {
    for (const key in inputData) {
      if (!inputData[key].isValid) {
        props.setCanGoNext(false);
        return;
      }
    }

    props.setCanGoNext(true);
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
    <div>
      {isDataLoaded && (
        <>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "260px" }}
          >
            <Input
              onChange={onChange}
              name={"name"}
              label={"სახელი"}
              type={"text"}
              pattern="^[ა-ჰ]+$"
              minLength={2}
              value={inputData.name.value}
              isValid={inputData.name.isValid}
              hintMessage={"მინიმუმ 2 ასო, ქართული ასოებით"}
            />
            <Input
              onChange={onChange}
              name={"surname"}
              label={"გვარი"}
              type={"text"}
              pattern="^[ა-ჰ]+$"
              minLength={2}
              value={inputData.surname.value}
              isValid={inputData.surname.isValid}
              hintMessage={"მინიმუმ 2 ასო, ქართული ასოებით"}
            />
          </div>
          <Input
            onChange={onChange}
            name={"image"}
            label={["პირადი ფოტოს ატვირთვა", "ატვირთვა"]}
            type={"file"}
            value={inputData.image.value}
            isValid={inputData.image.isValid}
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Input
              onChange={onChange}
              name={"aboutus"}
              label={"ჩემ შესახებ(არასავალდებულო)"}
              type={"text"}
              value={inputData.aboutus.value}
              isValid={inputData.aboutus.isValid}
            />

            <Input
              onChange={onChange}
              name={"email"}
              label={"ელ.ფოსტა"}
              type={"text"}
              pattern="^[a-zA-Z0-9.]+@redberry.ge$"
              value={inputData.email.value}
              isValid={inputData.email.isValid}
              hintMessage={"უნდა მთავრდებოდეს @redberry.ge -ით"}
            />

            <Input
              onChange={onChange}
              name={"number"}
              label={"მობილურის ნომერი"}
              type={"text"}
              pattern="^(\+?995)?(79\d{7}|5\d{8})$"
              value={inputData.number.value}
              isValid={inputData.number.isValid}
              hintMessage={
                "უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფირმატს"
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
