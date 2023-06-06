import { FaMeetup, FaDiscord } from "react-icons/fa";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  dataLayer: {
      userId: '001',
      userProject: 'project',
      page: 'getinvolved'
  },
  dataLayerName: 'PageDataLayer'
}
export const GetInvolved = () => {
  TagManager.dataLayer(tagManagerArgs)
  return (
    <div>
      <div className="flex align-middle flex-col justify-center items-center">
        <div className="bg-seaside flex flex-col justify-center items-center w-full">
          <h1
            className="p-4 text-coolgray flex align-center items-center
             justify-center text-3xl font-sans bg-gradient-to-b w-full"
          >
            How can you get involved?
          </h1>
          <p className="text-coolgray p-4 text-xl">
            There are many ways that members of our community collaborate. Find
            the best ways to contribute and connect!
          </p>
          <a href="mailto:info@dev-island.org">
            <button className="lg:justify-center text-white font-semibold m-4 p-4 bg-misty rounded-xl shadow-xl hover:underline hover:scale-120 transform translate">
              Reach out to info@dev-island.org
            </button>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="bg-coolgray w-full flex flex-col justify-center items-center p-12">
            <div className="lg:w-3/4 flex flex-col max-w-[1220px]">
              <h2 className="text-3xl drop-shadow-xl">Mentors</h2>
              <div className="p-4 [&>*]:p-2 flex-col flex justify-center">
                <p className=" text-lg">
                  Your expertise can empower students on their projects. Share
                  stories (and memes)!
                </p>
                <p className="text-lg">
                  Students and mentors connect online and in person.
                </p>
                <p className="text-lg">
                  Your support will have a powerful effect on a student's
                  outcomes!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-seaside text-coolgray flex flex-col p-12 w-full justify-center items-center">
            <div className="text-coolgray lg:w-3/4 flex flex-col max-w-[1220px]">
              <h2 className="text-3xl drop-shadow-xl">
                Community Organizations
              </h2>
              <div className="p-4 [&>*]:p-2">
                <p className="text-lg">
                  Dev-Island partners with organizations in the community to
                  pursue our mission and impact.
                </p>
                <p className="text-lg">How can Dev-Island help you?</p>
              </div>
            </div>
          </div>
          <div className="bg-coolgray w-full flex flex-col justify-center items-center p-12">
            <div className=" lg:w-3/4 flex flex-col max-w-[1220px]">
              <h2 className="text-3xl drop-shadow-xl">Online Community</h2>
              <div className="p-4 [&>*]:p-2">
                <p className="text-lg">
                  Dev-Island hosts online channels to bring people together and
                  to discuss technology!
                </p>
                <div className="flex justify-center space-x-12">
                  <button
                    onClick={() =>
                      window.open("https://www.meetup.com/kauai-tech/events/")
                    }
                    className="bg-misty shadow-lg p-2 text-3xl text-center border-coolgray border rounded-xl text-coolgray flex justify-center"
                  >
                    <FaMeetup />
                  </button>
                  <button className="bg-misty shadow-lg p-2 text-3xl text-center border-coolgray border rounded-xl text-coolgray flex justify-center">
                    <FaDiscord />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-seaside text-coolgray w-full flex flex-col justify-center items-center p-12">
            <div className="lg:w-3/4 flex flex-col max-w-[1220px]">
              <h2 className="text-3xl drop-shadow-xl ">Donating</h2>
              <div className="p-4 [&>*]:p-2">
                <p className=" text-lg">
                  Directly giving contributes to the careers and opportunities
                  of potential students.
                </p>
                <p className=" text-lg">
                  You're not just "teaching people to fish", you're also
                  "providing them a pole".
                </p>
                <div className="flex flex-col lg:flex-row">
                  <div className="rounded-full w-3/4 lg:w-1/4 lg:mt-10">
                    <img
                      className="rounded-full border-4 lg:h-[65%] w-full object-top object-cover"
                      src="/assets/DevIslandSchool_40.jpg"
                      alt="happy student"
                    ></img>
                  </div>
                  <div className="lg:p-12 lg:flex lg:flex-col lg:align-middle lg:justify-center">
                    <p className="p-4 text-lg">
                      "The time and effort required to take on the challenge of
                      the bootcamp were well worth it!
                    </p>
                    <p className="p-4 text-lg">
                      A scholarship made it possible.
                    </p>
                    <p className="p-4 text-lg">
                      Now I have valuable skills to level up my future!"
                    </p>
                    <div className="flex justify-center">
                      <button
                        onClick={() =>
                          window.open(
                            "https://www.paypal.com/donate/?hosted_button_id=ERME976A9HC48"
                          )
                        }
                        className="text-white font-semibold m-4 p-4 bg-misty rounded-xl shadow-lg hover:underline hover:scale-120 transform translate justify-center"
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
