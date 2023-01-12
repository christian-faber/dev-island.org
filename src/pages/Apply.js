import { ApplyForm } from "../components/ApplyForm";

export const Apply = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-2xl bg-blue-300">Become a Software Developer!</h1>
      </div>
      <ApplyForm />
    </div>
  );
};
