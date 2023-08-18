import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserLogin = (data) => {
    const { email, password } = data;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="login_form_container">
      <form onSubmit={handleSubmit(handleUserLogin)}>
        <input
          {...register("email", {
            required: "This is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Email is not vaild",
            },
          })}
          className="login_input mt-5"
          type="text"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-900 text-xs font-bold">
            {errors.email.message}
          </p>
        )}

        <input
          {...register("password", { required: "This is required" })}
          className="login_input mt-5"
          type="password"
          placeholder="Passowrd"
        />
        {errors.password && (
          <p className="text-red-900 text-xs font-bold">
            {errors.password.message}
          </p>
        )}
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
