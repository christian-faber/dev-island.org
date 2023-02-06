export const Team = ({ setOpen, setCharacter, team }) => {
  return (
    <div className="bg-misty">
      <h2 className="flex justify-start text-3xl pl-12 text-coolgray py-6">
        The Team
      </h2>
      <div className="flex flex-wrap justify-around">
        {team.map((member) => (
          <div
            key={member.name}
            onClick={() => (setOpen(true), setCharacter(member))}
            className="p-2 flex flex-col items-center w-1/3"
          >
            <img
              src={`${member.image}`}
              alt={`${member.name}`}
              className="border-4 rounded-full h-3/4 w-full object-cover shadow-lg"
            ></img>
            <h1 className="mt-4 text-coolgray">{member.name}</h1>
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
