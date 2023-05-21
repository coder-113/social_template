import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Signup() {
  const { token, user } = useSelector((state) => state.auth);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    // debugger;
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      // password_confirmation: passwordConfirmationRef.current.value,
    };

    console.log(payload);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log(responseData); // Handle the response data as needed
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form action="" onSubmit={onSubmit}>
          <h1 className="title">Sign Up for free</h1>
          {error && (
            <div className="alert">
              {Object.keys(error).map((key) => (
                <p key={key}>{error[key][0]}</p>
              ))}
            </div>
          )}
          <input ref={nameRef} type="text" placeholder="Full Name" />
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input
            ref={passwordConfirmationRef}
            type="password"
            placeholder="Confirm Password"
          />
          <button className="btn btn-block" type="submit">
            Signup
          </button>
          <p className="message">
            Already Register?
            <Link to={"/login"}>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
