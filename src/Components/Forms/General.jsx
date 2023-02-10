import { useEffect, useState } from "react";
import ImageUpload from "../ImageUpload";
import Input from "../Input";

export default function General(props) {
  // const [validEmail, setValidEmail] = useState(false);

  // function handleChange() {
  //   if (setValidEmail(validEmail, /^[a-zA-Z0-9.]+@redberry.ge$/)) return true;
  // }

  const [inputData, setInputData] = useState({
    name: {
      value: "",
      isValid: false,
    },
    surname: {
      value: "",
      isValid: false,
    },
    personalImage: {
      value: "",
      isValid: false,
    },
    aboutus: {
      value: "",
      isValid: false,
    },
    email: {
      value: "",
      isValid: false,
    },
    number: {
      value: "",
      isValid: false,
    },
  });

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
    setInputData({
      ...inputData,
      [inputName]: { value: inputValue, isValid: isValid },
    });

    props.getData(inputName, inputValue);
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
        />
        <Input
          onChange={onChange}
          name={"surname"}
          label={"გვარი"}
          type={"text"}
          pattern="^[ა-ჰ]+$"
        />
      </div>
      <ImageUpload
        onChange={onChange}
        name={"personalImage"}
        label={"პირადი ფოტოს ატვირთვა"}
        type={"file"}
        accept={"image/*"}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Input
          onChange={onChange}
          name={"aboutus"}
          label={"ჩემ შესახებ(არასავალდებულო)"}
          type={"text"}
          pattern="^[ა-ჰ]+$"
        />

        <Input
          onChange={onChange}
          name={"email"}
          label={"ელ.ფოსტა"}
          type={"text"}
          pattern="^[a-zA-Z0-9.]+@redberry.ge$"
        />

        <Input
          onChange={onChange}
          name={"number"}
          label={"მობილურის ნომერი"}
          type={"text"}
          pattern="^(\+?995)?(79\d{7}|5\d{8})$"
        />
      </div>
    </>
  );
}
