export const Donate = () => {
  return (
    <div>
      <div className="bg-purple-400 h-50 flex justify-center items-center align-center">
        <button className="bg-black text-white rounded-2xl p-5 m-5">
          Donate with Paypal
        </button>
      </div>
      <div className="bg-slate-300 h-15 w-full flex  justify-between">
        <div className="text-black bg-slate-250 pb-10">
          Donations help with stuff
        </div>
        <div className="text-black bg-slate-250 pt-10">Give us money</div>
      </div>
      <div className="bg-blue-300 display flex p-20 flex-col">
        <div className="bg-slate-300 mb-10 flex flex-row justify-center">
          <div className="bg-black">
            <img alt="Not"></img>
          </div>
          <div className="flex flex-col w-1/2">
            <p>Testimonial 1</p>
            <p>"inspirational quote"</p>
          </div>
        </div>
        <div className="bg-slate-300 flex flex-row">
          <div className="flex flex-col w-1/2">
            <p>Testimonial 2</p>
            <p>"inspirational quote"</p>
          </div>
          <div className="bg-black">
            <img alt="No 2"></img>
          </div>
        </div>
      </div>
      <div className="bg-slate-300">
        <p>
          a lot of students have gotten education through this program and
          scholarships
        </p>
      </div>
    </div>
  );
};
