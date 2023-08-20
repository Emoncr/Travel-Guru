import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const SingUp = ({ setNewUserData }) => {
  const {
    setNewUser,
    isNewUser,
    checkError,
    setCheckError,
    deleteNotifyMsg,
  } = setNewUserData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleFormData = (data) => {
    const { first_name, last_name, email, password } = data;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const fullName = first_name + " " + last_name;
        updateProfile(user, { displayName: fullName });
        setCheckError({
          ...checkError,
          isSuccess: true,
          successText: "Sign Up SuccessFull, Go For Login",
        });
        setNewUser(!isNewUser);
        deleteNotifyMsg();
      })
      .catch((error) => {
        const errorMessage = error.message;
        deleteNotifyMsg();
        setCheckError({
          ...checkError,
          isError: true,
          errorText: errorMessage,
        });
      });
  };

  return (
    <div className="login_form_container">
      <form onSubmit={handleSubmit(handleFormData)}>
        <input
          {...register("first_name", { required: "This is required." })}
          aria-invalid={errors.first_name ? true : false}
          className={`login_input mt-10 ${
            errors.first_name && "border-b-red-900"
          }`}
          type="text"
          placeholder="First Name"
        />

        {errors.first_name && (
          <p className="text-red-900 text-xs font-bold">
            {errors.first_name.message}
          </p>
        )}
        <input
          {...register("Last_name")}
          className="login_input mt-5"
          type="text"
          placeholder="Last Name"
        />
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
        <input
          {...register("confirm_password", {
            required: "This is required",
            validate: (value) => {
              const { password } = getValues();
              return password === value || "Passwords do not match";
            },
          })}
          className="login_input mt-5"
          type="password"
          placeholder="Confrim Passowrd"
        />
        {errors.confirm_password && (
          <p className="text-red-900 text-xs font-bold">
            {errors.confirm_password.message}
          </p>
        )}
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
