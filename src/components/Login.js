import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("")
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data validation
  
    const message = checkValidateData(emailRef.current.value,passwordRef.current.value,isSignInForm?"false":nameRef.current.value);
    setErrorMessage(message)
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4a59f124-030b-417a-9565-8362f395bdb0/web/IN-en-20260914-TRIFECTA-perspective_16ddf2ab-4945-4e79-8f84-6df3eef26875_large.jpg"
          alt="hero"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
            ref={nameRef}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
          ref={emailRef}
        />
        <input
          type="passowrd"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
          ref={passwordRef}
        />
        <p className="text-red-500 ">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-800 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to BingeBox? Sign up now"
            : "Already a User. Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
