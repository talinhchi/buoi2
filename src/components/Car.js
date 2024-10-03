import { useState } from "react";
function Car() {
  const [car, setCar] = useState({
    name: "Ferari",
    color: "Yellow",
    year: 1998,
  });
  const [inpYear, setInputYear] = useState(car.year);
  const handleUpdateYear = () => {
    setCar({
      ...car,
      year: inpYear,
    });
  };
  return (
    <>
      <p>Show info of car:</p>
      <ul>
        <li>name: {car.name}</li>
        <li>color: {car.color}</li>
        <li>year: {car.year}</li>
      </ul>
      Update Year of Car:{" "}
      <input
        type="number"
        value={inpYear}
        onInput={(e) => setInputYear(e.target.value)}
      />
      <input type="button" value="Update Year" onClick={handleUpdateYear} />
    </>
  );
}
export default Car;
