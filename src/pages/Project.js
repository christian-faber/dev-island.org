import { useState } from "react";

export const Project = () => {
  const [consult, setConsult] = useState(false);
  return (
    <div>
      <div>
        <h1>Request a bid</h1>
        <p>
          Are you looking for a front-end web developer for your project? Trying
          to update your web presence? Fill out the information below and we
          will be in contact to figure out how we can best help!
        </p>
        <p>This is where we will insert a form or a form link</p>
      </div>
      <hr />
      <div>
        <h1>Schedule a consultation</h1>
        <button
          onClick={() => setConsult(!consult)}
          className="bg-black text-white border rounded-xl"
        >
          Schedule an appointment
        </button>
        {consult && (
          <p>
            This feature is being developed now. This is where the embed code
            for a calendly will go.
          </p>
        )}
      </div>
      <hr />
      <div>
        <h1>Product List</h1>
        <div className="my-4 border w-11/12">
          <h1>Web Dev</h1>
          <h2>React Apps</h2>
          <p>Work with local developers to level up your business</p>
          <h2>Details</h2>
          <p>Maintenance</p>
          <p>Pricing</p>
        </div>
      </div>
      <div>
        <h1>Product List</h1>
        <div className="my-4 border w-11/12">
          <h1>Web Dev</h1>
          <h2>React Apps</h2>
          <p>Work with local developers to level up your business</p>
          <h2>Details</h2>
          <p>Maintenance</p>
          <p>Pricing</p>
        </div>
      </div>
      <div>
        <h1>Network products</h1>
        <div className="my-4 border w-11/12">
          <h1>Product Imaging</h1>
          <h2>Photography</h2>
          <p>Work with trusted partners</p>
          <h2>Details</h2>
          <p>Pricing</p>
        </div>
        <div className="my-4 border w-11/12">
          <h1>Graphic Design</h1>
          <h2>Logos and visuals</h2>
          <p>Work with trusted partners</p>
          <h2>Details</h2>
          <p>Pricing</p>
        </div>
      </div>
    </div>
  );
};
