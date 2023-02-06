import { ApplyForm } from "../components/ApplyForm";

export const Apply = () => {
  return (
    <div className="flex flex-col justify-center bg-seaside">
      <div className="text-center bg-coolgray border-white border m-10 py-8 shadow-lg">
        <h1 className="text-3xl font-bold drop-shadow-xl uppercase">Become</h1>
        <h1 className="text-3xl font-bold drop-shadow-xl uppercase">A</h1>
        <h1 className="text-3xl font-bold drop-shadow-xl uppercase">web</h1>
        <h1 className="text-3xl font-bold drop-shadow-xl uppercase">
          developer!
        </h1>
      </div>
      <ApplyForm />
    </div>
  );
};
