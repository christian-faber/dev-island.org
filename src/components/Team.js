export const Team = ({ setOpen, setCharacter, team }) => {
  return (
    <div className="bg-seaside rounded-xl shadow-2xl lg:max-w-[1220px]">
      <h2 className="flex justify-start text-3xl text-coolgray p-6">
        The Team
      </h2>
      <div className="flex flex-wrap justify-around m-2">
        {team.map((member) => (
          <div
            key={member.name}
            onClick={() => (setOpen(true), setCharacter(member))}
            className="p-2 flex flex-col items-center w-1/2 lg:w-1/4 lg:m-4 hover:scale-110 transition translate"
          >
            <img
              src={`${member.image}`}
              alt={`${member.name}`}
              className="border-4 rounded-full w-full object-cover shadow-xl lg:shadow-2xl"
            ></img>
            <h1 className="mt-4 text-coolgray">{member.name}</h1>
            <h1 className=" text-coolgray opacity-80">{member.position}</h1>
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
