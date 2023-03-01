import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <div className="flex flex-col  w-32 m-4 z-30 rounded-xl bg-coolgray">
      <ul className="w-full mr-[3px] flex [&>*]:rounded-lg [&>*]:shadow-lg">
        <li className="m-[2px] h-10 w-1/3 bg-seaside text-black ">
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/company/hidev-island/")
            }
            className="h-full w-full flex justify-center align-middle items-center"
          >
            <i className=" bg-coolgray rounded-full p-1 text-2xl">
              <FaLinkedin />
            </i>
          </button>
        </li>
        <li className="m-[2px] h-10 w-1/3 bg-misty text-white text-2xl">
          <button
            onClick={() =>
              window.open(
                "https://instagram.com/devislandkauai?igshid=YmMyMTA2M2Y="
              )
            }
            className="h-full w-full flex justify-center align-middle items-center"
          >
            <i className=" rounded-full p-1 bg-black">
              <FaInstagram />
            </i>
          </button>
        </li>
        <li className="m-[2px] h-10 w-1/3 bg-seaside text-black">
          <button
            onClick={() => window.open("https://github.com/orgs/dev-island/")}
            className="h-full w-full flex justify-center align-middle items-center"
          >
            <i className="bg-coolgray p-1 border-misty rounded-full text-2xl">
              <FaGithub />
            </i>
          </button>
        </li>
      </ul>
      <ul className="flex flex-row w-full [&>*]:rounded-lg [&>*]:shadow-lg">
        <Link
          to="/apply"
          className="w-full h-10 m-[2px] bg-misty text-coolgray flex justify-center align-middle items-center"
        >
          <li className="text-coolgray">Apply</li>
        </Link>
        <button
          onClick={() =>
            window.open(
              "https://www.paypal.com/donate/?hosted_button_id=ERME976A9HC48"
            )
          }
          className="w-full h-10 m-[2px] bg-misty text-coolgray flex justify-center align-middle items-center"
        >
          <li className=" text-coolgray">Donate</li>
        </button>
      </ul>
    </div>
  );
};
