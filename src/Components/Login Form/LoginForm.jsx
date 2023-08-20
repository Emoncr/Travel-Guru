import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { userLoginContext } from "../../Contexts/UserContext";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm = ({ setErrors }) => {
  const { checkError, setCheckError, deleteNotifyMsg } = setErrors;

  const { addLoginUser } = useContext(userLoginContext);
  const location = useLocation();


  const navigate = useNavigate();



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
        // Signed in success
        const user = userCredential.user;

        addLoginUser(user);
        setCheckError({
          ...checkError,
          isSuccess: true,
          successText: "Login SuccessFull",
        });
        deleteNotifyMsg();
        location.state&& navigate(location.state.from)
      })
      .catch((error) => {
        setCheckError({
          ...checkError,
          isError: true,
          errorText: error.message,
        });
        deleteNotifyMsg();
      });
  };

  return (
    <div className="login_form_container">
      <form onSubmit={handleSubmit(handleUserLogin)}>
        <input
          onFocus={() => setCheckError({ ...checkError, isError: false })}
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
          onFocus={() => setCheckError({ ...checkError, isError: false })}
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
          <div className="flex justify-between items-center ">
            <div className="flex   items-center ">
              <label className="ml-2 flex   items-center sm:text-sm text-[12px] font-medium text-black capitalize dark:text-gray-300">
                <input
                  id="remind-me"
                  type="checkbox"
                  className="w-4 h-4 text-yellow bg-gray-100 border-gray-300 focus:ring-yellow  checked:!bg-yellow mr-1"
                />
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
