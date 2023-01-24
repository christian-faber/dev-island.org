import sharece from "../assets/DevIslandSchool_00.jpg";
import kama from "../assets/DevIslandSchool_08.jpg";
import travis from "../assets/DevIslandSchool_20.jpg";
import christian from "../assets/DevIslandSchool_17.jpg";

export const Cohort = ({
  modalOpen,
  setOpen,
  character,
  setCharacter,
  students,
}) => {
  console.log(modalOpen);
  console.log(character);
  return (
    <div>
      <h2 className="flex align-center items-center justify-center text-xl font-sans bg-gradient-to-b bg-blue-300 w-full">
        Cohort
      </h2>
      <div className="flex flex-wrap justify-center space-x-4 my-4">
        {students.map((item) => (
          <div
            onClick={() => (setOpen(true), setCharacter(`${students.name}`))}
            className="border flex flex-col items-center"
          >
            <img
              src={students.image}
              alt={`${students.name}`}
              className="border rounded-full h-20 w-20 object-contain"
            ></img>
            <h1>{students.name}</h1>
          </div>
        ))}
        <div
          onClick={() => (setOpen(true), setCharacter("kama"))}
          className="border flex flex-col items-center"
        >
          <img
            src={kama}
            alt="kama"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Kamalani</h1>
        </div>
        <div
          onClick={() => (setOpen(true), setCharacter("travis"))}
          className="border flex flex-col  items-center"
        >
          <img
            src={travis}
            alt="student"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Travis</h1>
        </div>
        <div
          onClick={() => (setOpen(true), setCharacter("christian"))}
          className="border flex flex-col  items-center"
        >
          <img
            src={christian}
            alt="student"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Christian</h1>
        </div>
      </div>
    </div>
  );
};
