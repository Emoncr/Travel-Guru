import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import or from "../../images/or.png";
import fb from "../../images/fb.png";
import google from "../../images/google.png";
import LoginForm from "../Login Form/LoginForm";
import SingUp from "../Singup Form/SingUp";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FireBase Config/FirebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userLoginContext } from "../../Contexts/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Login = () => {
  const [isNewUser, setNewUser] = useState(false);
  const [checkError, setCheckError] = useState({
    isError: false,
    isSuccess: false,
    successText: "",
    errorText: "",
  });

  const { addLoginUser, state } = useContext(userLoginContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSingIn = () => {
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        addLoginUser(user);
        setCheckError({
          ...checkError,
          isSuccess: true,
          successText: "Resister Successfull",
        });
        deleteNotifyMsg();
        location.state && navigate(location.state.from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setCheckError({
          ...checkError,
          isError: true,
          errorText: errorMessage,
        });
        deleteNotifyMsg();
      });
  };

  const deleteNotifyMsg = () => {
    setTimeout(() => {
      setCheckError({
        ...checkError,
        isError: false,
        isSuccess: false,
      });
    }, 3000);
  };



  return (
    <>
      <section className="pt-5 px-3">
        <Header />
      </section>
      <section className="pb-5 lg:px-10 px-6 mt-2">
        <div className="  border-t-[1px] border-t-[#D1D1D1] mx-auto">
          <div className="py-10 lg:py-20 max-w-md mx-auto ">
            {/* ========Code for login form container ======== */}
            <div className="login_container bg-[rgba(255, 255, 255, 0.20)]  px-6 py-8 rounded-[0px] border-[1px]  border-yellow ">
              <p className="font-extrabold text-xl text-black">
                {isNewUser ? "Create an account" : "Login"}
              </p>

              <div className="form_container">
                {isNewUser ? (
                  <SingUp
                    setNewUserData={{
                      isNewUser,
                      setNewUser,
                      checkError,
                      setCheckError,
                      deleteNotifyMsg,
                    }}
                  />
                ) : (
                  <LoginForm
                    setErrors={{ checkError, setCheckError, deleteNotifyMsg }}
                  />
                )}
                {checkError.isError && (
                  <p className="text-red-900 duration-300 scale-up-top mt-2 text-center capitalize text-xs font-bold">
                    {checkError.errorText}
                  </p>
                )}
                {checkError.isSuccess && (
                  <p className="text-green-900 duration-300 scale-up-top mt-2 text-center capitalize text-xs font-bold">
                    {checkError.successText}
                  </p>
                )}
                <p className="text-center sm:text-sm mt-4 text-[12px]  text-black font-medium">
                  {isNewUser
                    ? "Already have an account?"
                    : "Don’t have an account?"}
                  <u
                    onClick={() => setNewUser(!isNewUser)}
                    className="text-yellow cursor-pointer ml-1"
                  >
                    {isNewUser ? "Login" : "Create an account"}
                  </u>
                </p>
              </div>
            </div>

            {/*========== others method to login ========= */}

            <div className="others_login">
              <img className="mt-5 w-full" src={or} alt="or" />
            </div>
            <div className="fb_login google_login mt-5">
              <div className="google_login_btn">
                <button
                  onClick={handleGoogleSingIn}
                  className="flex justify-center items-center w-full bg-white border border-gray-300 rounded-0  max-w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-amber-50 duration-50 focus:outline-none focus:ring-2 active:bg-white
              focus:ring-yellow"
                >
                  <img src={google} alt="google" className="mr-2 w-8" />
                  <span>Continue with Google</span>
                </button>
              </div>
              <div className="fb_login_btn mt-2">
                <button className="flex justify-center items-center w-full bg-white border border-gray-300 rounded-0  max-w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-amber-50 duration-50 focus:outline-none focus:ring-2 focus:ring-yellow active:bg-white ">
                  <img src={fb} alt="google" className="mr-2 " />
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
