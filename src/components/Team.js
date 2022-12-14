import rich from "../assets/DevIslandSchool_06.jpg";
import aj from "../assets/DevIslandSchool_11.jpg";
import dani from "../assets/DevIslandSchool_20.jpg";

export const Team = () => {
  return (
    <div>
      <h2 className="flex justify-center text-xl">Team</h2>
      <div className="flex flex-wrap">
        <div className="border flex flex-col items-center">
          <img
            src={rich}
            alt="rich"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Rich</h1>
        </div>
        <div className="border flex flex-col items-center">
          <img
            src={aj}
            alt="aj"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Ay Jay</h1>
        </div>
        <div className="border flex flex-col  items-center">
          <img
            src={dani}
            alt="student"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Danielle</h1>
        </div>
      </div>
    </div>
  );
};
