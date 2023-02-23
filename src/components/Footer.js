import { CallToAction } from "./CallToAction";

export const Footer = () => {
  return (
    <div className="flex py-4 justify-between mx-8">
      <h2 className="flex items-center align-middle">TM Dev-Island</h2>
      <CallToAction />
    </div>
  );
};
