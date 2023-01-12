import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="fixed w-10 shadow border m-4 right-2 bottom-4 z-10">
      <ul>
        <li className="h-10 relative bg-blue-300 text-black">
          <a
            href="https://www.linkedin.com/company/hidev-island/"
            className="block h-full w-full border-b-2"
          >
            <i className="absolute top-2 right-3">
              <FaLinkedin />
            </i>
          </a>
        </li>
        <li className="h-10 relative bg-slate-300 text-black">
          <a
            href="https://github.com/orgs/dev-island/"
            className="block h-full w-full border-b-2"
          >
            <i className="absolute top-2 right-3">
              <FaGithub />
            </i>
          </a>
        </li>
        <li className="h-10 relative bg-purple-300 text-black">
          <a
            href="https://instagram.com/devislandkauai?igshid=YmMyMTA2M2Y="
            className="block h-full w-full border-b-2"
          >
            <i
              src="../assets/mycollection/png/instagram.png"
              className="absolute top-2 right-3"
            >
              <FaInstagram />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};
