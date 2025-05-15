import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="relative flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img
          src="src/assets/Blue-Shape.svg"
          alt="1st"
          className="-rotate-[45deg] h-64 md:h-72"
        />
        <img
          src="src/assets/Pink-Shape.svg"
          alt="1st"
          className="absolute -rotate-[30deg] h-64 md:h-72"
        />
        <img
          src="src/assets/Purple-Shape.svg"
          alt="1st"
          className="absolute -rotate-[15deg] h-64 md:h-72"
        />
        <img
          src="src/assets/Hero-Model.png"
          alt="1st"
          className="absolute h-64 md:h-72"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold leading-tight">
          Host your website in less than 5 minutes
        </h1>
        <p className="text-gray-400">
          With Hoster , get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online{" "}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted! We'll be in touch.");
          }}
          action=""
          className="flex flex-col gap-4 md:flex-row"
        >
          <input
            type="email"
            name=""
            id=""
            placeholder="enter your email adress"
            className="rounded-md px-4 scroll-py-3 bg-white placeholder:text-gray-400"
            required
          />
          <button
            type="submit"
            className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white"
          >
            join waitlist
          </button>
        </form>
        <div className="flex gap-2 margi">
          <img src="src/assets/Checkmark.svg" alt="checkbox" />
          <p className="text-gray-400">No spam,ever . Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
