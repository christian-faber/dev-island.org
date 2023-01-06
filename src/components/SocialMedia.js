export const SocialMedia = () => {
  return (
    <div className="fixed w-20 shadow border m-4 right-2 bottom-4">
      <ul>
        <li className="h-20 relative bg-blue-300 text-black">
          <a
            href="linkedin.com"
            className="block h-full w-full border-b-2 pl-1/4 hover:w-[200px] hover:z-10"
          >
            <span className="invisible hover:block">LinkedIn</span>
            <i className="absolute top-4 right-4">🧾</i>
          </a>
        </li>
        <li className="h-20 relative bg-slate-300 text-black">
          <a
            href="github.com"
            className="block h-full w-full border-b-2 pl-1/4 hover:w-[200px] hover:z-10"
          >
            <span className="invisible hover:block">GitHub</span>
            <i className="absolute top-4 right-4">🐱</i>
          </a>
        </li>
        <li className="h-20 relative bg-purple-300 text-black">
          <a
            href="instagram.com"
            className="block h-full w-full border-b-2 pl-1/4 hover:w-[200px] hover:z-10"
          >
            <span className="invisible hover:block text-black">Instagram</span>
            <i className="absolute top-4 right-4">📷</i>
          </a>
        </li>
      </ul>
    </div>
  );
};
