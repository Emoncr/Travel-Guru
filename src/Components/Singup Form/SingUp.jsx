import React from "react";

const SingUp = () => {
  return (
    <div className="login_form_container">
      <form action="">
        <input
          className="login_input mt-10"
          type="text"
          placeholder="First Name"
        />
        <input
          className="login_input mt-5"
          type="text"
          placeholder="Last Name"
        />
        <input className="login_input mt-5" type="email" placeholder="Email" />
        <input
          className="login_input mt-5"
          type="password"
          placeholder="Passowrd"
        />
        <input
          className="login_input mt-5"
          type="password"
          placeholder="Confrim Passowrd"
        />
        <button
          type="submit"
          className="brand_btn w-full bg-yellow mt-7 rounded-none"
        >
          Create an account
        </button>
      </form>
    </div>
  );
};

export default SingUp;
