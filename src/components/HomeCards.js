
export const HomeCards = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:m-12">
      <div className="bg-seaside p-8 max-w-[1220px] rounded-2xl shadow-xl my-4 mx-2 lg:w-3/4">
        <h1 className="text-5xl text-white mb-2 font-bold">Mission</h1>
        <h2 className="my-2 py-2 text-2xl font-bold text-white">
          Connect, Empower, Grow
        </h2>
        <hr className="text-white bg-white border-2 border-white h-1 w-full" />
        <div className="m-10">
          <p className="w-full text-xl text-white font-semibold">
            Dev-Island's mission is to connect residents with technology and
            skills to earn a better living by attending a software-development
            bootcamp, to empower the community by supporting the tech industry
            and high-paying jobs in it, and to grow Dev-Island's capacity and
            roots.
          </p>
        </div>
      </div>

      <div className="bg-seaside p-8 max-w-[1220px] rounded-2xl shadow-xl my-4 mx-2 lg:w-3/4 border">
        <h1 className="text-5xl text-white mb-2 font-bold">Who we serve</h1>
        <h2 className="my-2 py-2 text-2xl font-bold text-white">
          Students, Organizations, Community
        </h2>
        <hr className="text-white bg-white border-2 border-white h-1 w-full" />
        <div className="m-10 [&>*]:p-2">
          <p className="w-full text-xl font-semibold text-white">
            Students learning about technology and building career skills.
          </p>
          <p className="w-full text-xl font-semibold text-white">
            Businesses looking for stronger web presence and functionality.
          </p>
          <p className="w-full text-xl font-semibold text-white">
            Companies looking for trained and enthusiastic employees!
          </p>
        </div>
      </div>
      <div className="bg-seaside text-white p-8 max-w-[1220px] rounded-2xl shadow-xl my-4 mx-2 lg:w-3/4 ">
        <h1 className="text-5xl text-white mb-2 font-bold">Community</h1>
        <h2 className="my-2 py-2 text-2xl font-bold">Kauaʻi</h2>
        <hr className="text-white bg-white border-2 border-white h-1 w-full" />
        <div className="m-10">
          <p className="w-full text-xl font-semibold">
            Kauaʻi, the Garden Island, is home.
          </p>
          <p className="w-full mt-6 text-xl font-semibold">
            The people here are resilient, talented, and dedicated.
          </p>
        </div>
      </div>
    </div>
  );
};
