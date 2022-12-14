import sharece from "../assets/DevIslandSchool_00.jpg";
import kama from "../assets/DevIslandSchool_08.jpg";
import travis from "../assets/DevIslandSchool_20.jpg";
import christian from "../assets/DevIslandSchool_17.jpg";

export const Cohort = () => {
  return (
    <div>
      <h2 className="flex justify-center text-xl">Cohort</h2>
      <div className="flex flex-wrap">
        <div className="border flex flex-col items-center">
          <img
            src={sharece}
            alt="sharece"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Sharece</h1>
        </div>
        <div className="border flex flex-col items-center">
          <img
            src={kama}
            alt="kama"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Kamalani</h1>
        </div>
        <div className="border flex flex-col  items-center">
          <img
            src={travis}
            alt="student"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Travis</h1>
        </div>
        <div className="border flex flex-col  items-center">
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
