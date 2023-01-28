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
      <h2 className="flex align-center items-center justify-center text-xl font-sans bg-gradient-to-b bg-misty text-white w-full">
        Cohort
      </h2>
      <div className="flex flex-wrap justify-center space-x-4 my-4">
        {students.map((student) => (
          <div
            key={student.name}
            onClick={() => (setOpen(true), setCharacter(student))}
            className="border flex flex-col items-center"
          >
            <img
              src={`${student.image}`}
              alt={`${student.name}`}
              className="border rounded-full h-20 w-20 object-contain"
            ></img>
            <h1>{student.name}</h1>
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
