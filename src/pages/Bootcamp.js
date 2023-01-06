export const Bootcamp = () => {
  return (
    <div className="flex align-middle flex-col justify-center items-center">
      <h1 className="flex align-center items-center justify-center text-xl font-sans bg-gradient-to-b bg-blue-300 w-full">
        Bootcamp
      </h1>
      <div className="">
        <div className="mt-4 border w-11/12">
          <h1>Key Points</h1>
          <ul>
            <li>Cost: $0</li>
            <li>Time: March - February, 3 hour class Tuesdays and Thursdays</li>
            <li>Difficulty: Worth it</li>
          </ul>
        </div>
        <div className="mt-4 border w-11/12">
          <h1>Curriculum</h1>
          <h2>Techical Skills</h2>
          <h2>Professional Accumen</h2>
          <h2>Leadership</h2>
          <h2>Handling emotions</h2>
        </div>
        <div className="mt-4 border w-11/12">
          <h1>Team</h1>
          <h2>Connection</h2>
          <p>Slack, github, check-ins</p>
          <h2>Accountability</h2>
          <p>Collaboration and commitment</p>
          <h2>Support</h2>
          <p>Help always available. Emotional support</p>
        </div>
        <div>
          <button className="border-2 p-4 m-2 shadow bg-purple-300 text-white">
            BECOME A STUDENT!
          </button>
        </div>
      </div>
    </div>
  );
};
