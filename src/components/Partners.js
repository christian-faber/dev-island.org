export const Partners = ({ setOpen, setCharacter, partners }) => {
  return (
    <div>
      <h2 className="flex justify-start text-xl pl-4">Partners</h2>
      <div className="flex flex-wrap justify-center space-x-4 my-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            onClick={() => (setOpen(true), setCharacter(`${partner.name}`))}
            className="border flex flex-col items-center"
          >
            <img
              src={`${partner.image}`}
              alt={`${partner.name}`}
              className="border rounded-full h-20 w-20 object-contain"
            ></img>
            <h1>{partner.name}</h1>
          </div>
        ))}
        {/* <div
          onClick={() => (setOpen(true), setCharacter("partner 1"))}
          className="border flex flex-col items-center"
        >
          <img
            src="/"
            alt="partner 1"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Partner</h1>
        </div>
        <div
          onClick={() => (setOpen(true), setCharacter("partner 2"))}
          className="border flex flex-col items-center"
        >
          <img
            src="/"
            alt="partner 2"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>Parnter</h1>
        </div>
        <div
          onClick={() => (setOpen(true), setCharacter("partner 3"))}
          className="border flex flex-col  items-center"
        >
          <img
            src="/"
            alt="partner 3"
            className="border rounded-full h-20 w-20 object-contain"
          ></img>
          <h1>partner</h1>
        </div> */}
      </div>
    </div>
  );
};
