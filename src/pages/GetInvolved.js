import { FaMeetup, FaDiscord } from "react-icons/fa";
export const GetInvolved = () => {
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
            <button className="lg:justify-center text-white font-semibold m-4 p-4 bg-og rounded-xl shadow-lg hover:underline hover:scale-120 transform translate">
              Reach out to info@dev-island.org
            </button>
          </a>
        </div>
        <div className="flex flex-col justify-center items-middle align-middle w-full">
          <div className="m-4 p-4 border w-11/12 rounded-xl shadow-xl bg-misty">
            <div className="border-og border m-2 p-4 rounded-xl">
              <h2 className="text-2xl p-4 drop-shadow-lg text-coolgray">
                Mentors
              </h2>
              <ul className="list-disc pl-4 [&>*]:py-2 text-coolgray">
                <li>
                  <p className="text-coolgray text-lg">
                    Student and mentors connect online and in person
                  </p>
                </li>
                <li>
                  <p className="text-coolgray text-lg">
                    Your expertise can empower students on their projects
                  </p>
                </li>
                <li>
                  <p className="text-coolgray text-lg">
                    Share stories (and memes)
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="m-4 p-4 border w-11/12 rounded-xl shadow-xl bg-coolgray">
            <div className="border-og border m-2 p-4 rounded-xl">
              <h2 className="text-2xl p-4 drop-shadow-lg">
                Community Organizations
              </h2>
              <p className=" text-lg">
                Dev-Island partners with organizations in the community to
                pursue our mission and impact.
              </p>
              <p className="mt-4 text-lg">How can Dev-Island help you?</p>
            </div>
          </div>
          <div className="m-4 p-4 border w-11/12 rounded-xl shadow-xl bg-og">
            <div className="border-seaside border m-2 p-4 rounded-xl">
              <h2 className="text-2xl p-4 drop-shadow-lg text-coolgray">
                Online Community
              </h2>
              <p className="text-coolgray text-lg">
                Dev-Island hosts online channels to bring people together and to
                discuss technology!
              </p>
              <div className="m-4 flex justify-center space-x-12">
                <a href="/" className="">
                  <button className="bg-misty shadow-lg p-2 text-3xl text-center border-coolgray border rounded-xl text-coolgray flex justify-center">
                    <FaMeetup />
                  </button>
                </a>
                <a href="/" className="">
                  <button className="bg-misty shadow-lg p-2 text-3xl text-center border-coolgray border rounded-xl text-coolgray flex justify-center">
                    <FaDiscord />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="m-4 p-4 border w-11/12 rounded-xl shadow-xl bg-seaside">
            <div className="border-og border m-2 p-4 rounded-xl">
              <h2 className="text-2xl px-4 pt-4 drop-shadow-lg text-coolgray">
                Donating
              </h2>
              <ul className="list-disc pl-4 [&>*]:py-2 my-4 text-coolgray">
                <li>
                  <p className="text-coolgray text-lg">
                    Directly giving contributes to the careers and opportunities
                    of potential students.
                  </p>
                </li>
                <li>
                  <p className="text-coolgray text-lg">
                    You're not just "teaching people to fish", you're also
                    "providing them a pole".
                  </p>
                </li>
              </ul>
              <div className="flex flex-col">
                <div className="lg:flex-row lg:flex">
                  <div className="rounded-full w-3/4 lg:w-1/4 object-cover border-4 border-coolgray">
                    <img
                      className="rounded-full border-og border-4"
                      src="/assets/DevIslandSchool_40.jpg"
                      alt="happy student"
                    ></img>
                  </div>
                  <div className="lg:p-12 lg:flex lg:flex-col lg:align-middle lg:justify-center">
                    <p className="pt-4 text-coolgray text-lg">
                      "The time and effort required to take on the challenge of
                      the bootcamp were well worth it!
                    </p>
                    <p className="pb-4 pt-4 lg:pt-0 lg:pb-0 text-coolgray text-lg">
                      A scholarship made it possible.
                    </p>
                    <p className="pb-4 pt-4 lg:pt-0 text-coolgray text-lg">
                      Now I have valuable skills to level up my future!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="text-white font-semibold m-4 p-4 bg-og rounded-xl shadow-lg hover:underline hover:scale-120 transform translate justify-center">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
