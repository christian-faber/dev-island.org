import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <div className="flex flex-col fixed w-32 m-4 z-50 right-2 bottom-4 rounded-xl bg-coolgray">
      <ul className="w-full mr-[3px] flex [&>*]:rounded-lg [&>*]:shadow-lg">
        <li className="m-[2px] h-10 w-1/3 bg-og text-black ">
          <a
            href="https://www.linkedin.com/company/hidev-island/"
            className="h-full w-full flex justify-center align-middle items-center"
          >
            <i className=" border-og ">
              <FaLinkedin />
            </i>
          </a>
        </li>
        <li className="m-[2px] h-10 w-1/3 bg-misty text-black">
          <a
            href="https://github.com/orgs/dev-island/"
            className="h-full w-full flex justify-center align-middle items-center"
          >
            <i className="bg-coolgray border-misty rounded-full">
              <FaGithub />
            </i>
          </a>
        </li>
        <li className="m-[2px] h-10 w-1/3 bg-og text-black">
          <a
            href="https://instagram.com/devislandkauai?igshid=YmMyMTA2M2Y="
            className="h-full w-full flex justify-center align-middle items-center"
          >
            <i className=" rounded-md">
              <FaInstagram />
            </i>
          </a>
        </li>
      </ul>
      <ul className="flex flex-row w-full [&>*]:rounded-lg [&>*]:shadow-lg">
        <Link
          to="/apply"
          className="w-full h-10 m-[2px] bg-misty text-coolgray flex justify-center align-middle items-center"
        >
          <li className="text-coolgray">Apply</li>
        </Link>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=ERME976A9HC48"
          className="w-full h-10 m-[2px] bg-misty text-coolgray flex justify-center align-middle items-center"
        >
          <li className=" text-coolgray">Donate</li>
        </a>
      </ul>
    </div>
  );
};
