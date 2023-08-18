import React from "react";

const LoginForm = () => {
  return (
    <div className="login_form_container">
      <form action="">
        <input
          className="login_input mt-10"
          type="email"
          placeholder="Username or Email"
        />
        <input
          className="login_input mt-5"
          type="password"
          placeholder="Passowrd"
        />
        <div className="remaind_me mt-5">
          <div class="flex justify-between items-center ">
            <div className="flex  items-center ">
              <input
                id="remind-me"
                type="checkbox"
                class="w-4 h-4 text-yellow bg-gray-100 border-gray-300 focus:ring-yellow  checked:!bg-yellow "
              />
              <label
                for="remind-me"
                class="ml-2 sm:text-sm text-[12px] font-medium text-black capitalize dark:text-gray-300"
              >
                remind me
              </label>
            </div>
            <div className="forgotten_password">
              <p className="sm:text-sm text-[12px] cursor-pointer text-yellow font-medium">
                <u>Forgot Password</u>
              </p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="brand_btn w-full bg-yellow mt-7 rounded-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
