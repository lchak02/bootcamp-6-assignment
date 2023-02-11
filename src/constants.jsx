const WORK_HISTORY_INITIAL = {
  position: {
    value: "",
    isValid: null,
  },
  employee: {
    value: "",
    isValid: null,
  },
  started_date: {
    value: "",
    isValid: null,
  },
  ended_date: {
    value: "",
    isValid: null,
  },
  description: {
    value: "",
    isValid: null,
  },
};

const EDUCATION_HISTORY_INITIAL = {
  university: {
    value: "",
    isValid: null,
  },
  degree: {
    value: "",
    isValid: null,
  },
  endeddate: {
    value: "",
    isValid: null,
  },
  edudescription: {
    value: "",
    isValid: null,
  },
};

const GENERAL_INFO_INITIAL = {
  name: {
    value: "",
    isValid: null,
  },
  surname: {
    value: "",
    isValid: null,
  },
  image: {
    value: "",
    isValid: null,
  },
  aboutus: {
    value: "",
    isValid: null,
  },
  email: {
    value: "",
    isValid: null,
  },
  number: {
    value: "",
    isValid: null,
  },
};

const EDUCATION_OPTIONS = [
  "საშუალო სკოლის დიპლომი",
  "ზოგადსაგანმანათლებლო დიპლომი",
  "მაგისტრი",
  "ბაკალავრი",
  "დოქტორი",
  "ასოცირებული ხარისხი",
  "სტუდენტი",
  "კოლეჯი(ხარისხის გარეშე)",
  "სხვა",
];

export {
  WORK_HISTORY_INITIAL,
  EDUCATION_HISTORY_INITIAL,
  GENERAL_INFO_INITIAL,
  EDUCATION_OPTIONS,
};
