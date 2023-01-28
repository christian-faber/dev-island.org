export const Bubble = ({ setOpen, setCharacter, students }) => {
  return (
    <div>
      <div
        onClick={() => (setOpen(true), setCharacter(`${students.name}`))}
        className="border flex flex-col items-center"
      >
        <img
          src={`${students.image}`}
          alt={`${students.name}`}
          className="border rounded-full h-20 w-20 object-contain"
        ></img>
        <h1>{students.name}</h1>
      </div>
    </div>
  );
};
