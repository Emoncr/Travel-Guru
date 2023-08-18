import React, { useState } from "react";
import Header from "../Header/Header";
import or from "../../images/or.png";
import fb from "../../images/fb.png";
import google from "../../images/google.png";
import LoginForm from "../Login Form/LoginForm";
import SingUp from "../Singup Form/SingUp";

const Login = () => {
  const [isNewUser, setNewUser] = useState(false);

  return (
    <>
      <section className="pt-5 px-3">
        <Header />
      </section>
      <section className="pb-5 px-10 mt-2">
        <div className="  border-t-[1px] border-t-yellow mx-auto">
          <div className="py-20 max-w-md mx-auto ">
            {/* ========Code for login form container ======== */}
            <div className="login_container bg-[rgba(255, 255, 255, 0.20)]  px-6 py-8 rounded-[0px] border-[1px]  border-yellow ">
              <p className="font-extrabold text-xl text-black">{isNewUser?'Create an account':'Login'}</p>

              <div className="form_container">
                {isNewUser ? <SingUp /> : <LoginForm />}
                <p className="text-center sm:text-sm mt-4 text-[12px]  text-black font-medium">
                  {isNewUser?'Already have an account?':'Don’t have an account?'}
                  <u
                    onClick={()=>setNewUser(!isNewUser)}
                    className="text-yellow cursor-pointer ml-1"
                  >
                    {
                      isNewUser?'Login':'Create an account'
                    }
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
                  class="flex justify-center items-center w-full bg-white border border-gray-300 rounded-0  max-w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-amber-50 duration-50 focus:outline-none focus:ring-2
              focus:ring-yellow"
                >
                  <img src={google} alt="google" className="mr-2 w-8" />
                  <span>Continue with Google</span>
                </button>
              </div>
              <div className="fb_login_btn mt-2">
                <button
                  class="flex justify-center items-center w-full bg-white border border-gray-300 rounded-0  max-w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-amber-50 duration-50 focus:outline-none focus:ring-2
              focus:ring-yellow"
                >
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
