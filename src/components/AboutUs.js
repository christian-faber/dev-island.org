import { Cohort } from "./Cohort";
import { NavBar } from "./NavBar";
import { Partners } from "./Partners";
import { Team } from "./Team";

export const AboutUs = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <div className="flex flex-row p-20">
          <div>
            <h2>Background</h2>
            <p>This is where we can say background info</p>
          </div>
          <img className="border" alt="I DON'T have"></img>
        </div>
        <div className="flex flex-row p-20">
          <div>
            <h2>History and Happy Things</h2>
            <p>More information here pleasee</p>
          </div>
          <img alt="you think I'd have a photo?" className="border"></img>
        </div>
      </div>
      <Cohort />
      <Team />
      <Partners />
    </div>
  );
};
