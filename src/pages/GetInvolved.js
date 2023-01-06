export const GetInvolved = () => {
  return (
    <div className="flex align-middle flex-col justify-center items-center">
      <div>
        <h1 className="flex align-center items-center justify-center text-xl font-sans bg-gradient-to-b bg-blue-300 w-full">
          Get Involved
        </h1>
        <p>
          There are many ways that members of our community connect and
          collaborate.
        </p>
        <div className="mt-4 border w-11/12">
          <h2>Mentors</h2>
          <p>
            Our students have been fortunate to learn from many mentors from
            Kauaʻi
          </p>
        </div>
        <div className="mt-4 border w-11/12">
          <h2>Community Organizations</h2>
          <p>
            We partner with all kinds of organizations in the community to
            pursue our mission and impact.
          </p>
        </div>
        <div className="mt-4 border w-11/12">
          <h2>Online Community</h2>
          <p>
            We host online channels to bring people together over technology as
            an industry or a hobby!
          </p>
          <a href="/">Our Meetup Link</a>
          <a href="/">Our Discord Link</a>
        </div>
        <div className="mt-4 border w-11/12">
          <h2>Donating</h2>
          <p>
            Directly giving contributes to the careers and opportunities of
            potential students. While there are many other ways to contribute,
            this is a great way to show direct support for those around you
            aiming for better outcomes for themselves and their families. You're
            not just "teaching people to fish", you're also "providing them a
            pole".
          </p>
          <button className="border-2 p-4 m-2 shadow bg-purple-300 text-white">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};
