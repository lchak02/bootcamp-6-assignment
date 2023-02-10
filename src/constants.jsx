const WORK_HISTORY_INITIAL = {
  position: {
    value: "",
    isValid: false,
  },
  employee: {
    value: "",
    isValid: false,
  },
  started_date: {
    value: "",
    isValid: false,
  },
  ended_date: {
    value: "",
    isValid: false,
  },
  description: {
    value: "",
    isValid: false,
  },
};

const EDUCATION_HISTORY_INITIAL = {
  university: {
    value: "",
    isValid: false,
  },
  degree: {
    value: "",
    isValid: false,
  },
  endeddate: {
    value: "",
    isValid: false,
  },
  edudescription: {
    value: "",
    isValid: false,
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

export { WORK_HISTORY_INITIAL, EDUCATION_HISTORY_INITIAL, EDUCATION_OPTIONS };
