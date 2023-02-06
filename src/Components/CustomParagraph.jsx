export default function CustomParagraph({ value, label }) {
  return (
    <>
      <span>{label} </span>
      <p>{value}</p>
    </>
  );
}
