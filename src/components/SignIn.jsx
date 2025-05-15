import React from "react";

const SignIn = () => {
  return (
    <div className="max-w-md mx-auto p-8 border rounded mt-16 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded w-full mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded w-full mb-6"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-6 py-3 w-full"
          onClick={(e) => {
            e.preventDefault();
            alert("Sign In functionality coming soon!");
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
