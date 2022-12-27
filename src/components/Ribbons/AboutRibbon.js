export const AboutRibbon = ({ isOpen, setOpen }) => {
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            console.log(isOpen);
            setOpen(true);
          }}
          className="bg-blue-600 hover:border-xl hover:border-blue-300 transform transition"
        >
          <h1>Learn about us</h1>
          <p>Dev-Island requires the work and dedication of many people.</p>
          <p className="hidden hover:visible">
            Click here to learn more about those who make up our team.
          </p>
        </button>
      </div>
    </>
  );
};
