
export const FAQComponent = ({ question, answer }) => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <div className="p-2 m-4 w-3/4 rounded-3xl shadow-xl bg-seaside">
      <div className="border-2 border-coolgray rounded-3xl p-5 text-coolgray">
        {/* {!isOpen && (
          <div
            onClick={() => setOpen(true)}
            className="flex flex-row align-middle items-center justify-between w-full"
          >
            <h1 className="text-2xl font-semibold">{question}</h1>
            <h1 className="text-3xl">+</h1>
          </div>
        )}
        {isOpen && ( */}
        <>
          <div
            // onClick={() => {
            //   setOpen(false);
            // }}
            className="flex flex-row align-middle items-center justify-between w-full"
          >
            <h1 className="text-2xl font-semibold border-b-2 border-seaside">
              {question}
            </h1>
            {/* <h1 className="text-3xl">-</h1> */}
          </div>
          <div>
            <p className="text-xl p-4">{answer}</p>
          </div>
        </>
        {/* )} */}
      </div>
    </div>
  );
};
