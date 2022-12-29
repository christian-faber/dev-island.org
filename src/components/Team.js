import rich from "../assets/DevIslandSchool_06.jpg";
import aj from "../assets/DevIslandSchool_11.jpg";
import dani from "../assets/DevIslandSchool_20.jpg";

export const Team = ({ setOpen, setCharacter }) => {
  return (
    <div>
      <h2 className="flex justify-start text-xl pl-4">Team</h2>
      <div className="flex flex-wrap justify-center space-x-4 my-4">
        <div
          onClick={() => (setOpen(true), setCharacter("rich"))}
          className="border flex flex-col items-center"
        >
          <img
            src={rich}
            alt="rich"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Rich</h1>
        </div>
        <div
          onClick={() => (setOpen(true), setCharacter("aj"))}
          className="border flex flex-col items-center"
        >
          <img
            src={aj}
            alt="aj"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Ay Jay</h1>
        </div>
        <div
          onClick={() => (setOpen(true), setCharacter("dani"))}
          className="border flex flex-col  items-center"
        >
          <img
            src={dani}
            alt="dani"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Danielle</h1>
        </div>
      </div>
    </div>
  );
};
