export const Cohort = ({
  modalOpen,
  setOpen,
  character,
  setCharacter,
  students,
}) => {
  console.log(students);

  return (
    <div>
      <h2
        className="flex align-center items-center justify-center
       text-2xl font-semibold bg-gradient-to-b text-coolgray w-full"
      >
        Cohort
      </h2>
      <div className="flex flex-wrap justify-around">
        {students.map((student) => (
          <div
            key={student.name}
            onClick={() => (setOpen(true), setCharacter(student))}
            className="flex flex-col items-center p-2 w-1/2 lg:w-1/4"
          >
            <img
              src={`${student.image}`}
              alt={`${student.name}`}
              className="border-4 rounded-full h-3/4 lg:h-full w-full object-cover shadow-xl"
            ></img>
            <h1 className="mt-4">{student.name}</h1>
          </div>
        ))}

        {/* <div
          onClick={() => (setOpen(true), setCharacter("kama"))}
          className="border flex flex-col items-center"
        >
          <img
            src={kama}
            alt="kama"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Kamalani</h1>
        </div>
        <div
          onClick={() => (setOpen(true), setCharacter("travis"))}
          className="border flex flex-col  items-center"
        >
          <img
            src={travis}
            alt="student"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Travis</h1>
        </div>
        <div
          onClick={() => (setOpen(true), setCharacter("christian"))}
          className="border flex flex-col  items-center"
        >
          <img
            src={christian}
            alt="student"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Christian</h1>
        </div> */}
      </div>
    </div>
  );
};
