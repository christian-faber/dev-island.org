export const Team = ({ setOpen, setCharacter, team }) => {
  return (
    <div>
      <h2 className="flex justify-start text-xl pl-4">Team</h2>
      <div className="flex flex-wrap justify-center space-x-4 my-4">
        {team.map((member) => (
          <div
            key={member.name}
            onClick={() => (setOpen(true), setCharacter(member))}
            className="border flex flex-col items-center"
          >
            <img
              src={`${member.image}`}
              alt={`${member.name}`}
              className="border rounded-full h-20 w-20 object-contain"
            ></img>
            <h1>{member.name}</h1>
          </div>
        ))}
        {/* // <div
        //   onClick={() => (setOpen(true), setCharacter("rich"))}
        //   className="border flex flex-col items-center"
        // >
        //   <img
        //     src="/"
        //     alt="rich"
        //     className="border rounded-full h-20 w-20 object-contain"
        //   ></img>
        //   <h1>Rich</h1>
        // </div>
        // <div
        //   onClick={() => (setOpen(true), setCharacter("aj"))}
        //   className="border flex flex-col items-center"
        // >
        //   <img
        //     src="/"
        //     alt="aj"
        //     className="border rounded-full h-20 w-20 object-contain"
        //   ></img>
        //   <h1>Ay Jay</h1>
        // </div>
        // <div
        //   onClick={() => (setOpen(true), setCharacter("dani"))}
        //   className="border flex flex-col  items-center"
        // >
        //   <img
        //     src="/"
        //     alt="dani"
        //     className="border rounded-full h-20 w-20 object-contain"
        //   ></img>
        //   <h1>Danielle</h1>
        // </div> */}
      </div>
    </div>
  );
};
