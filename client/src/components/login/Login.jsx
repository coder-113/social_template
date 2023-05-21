import { Link, Navigate, useNavigate, useNavigation } from "react-router-dom";
import { createRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/index";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = createRef();
  const passwordRef = createRef();
  const [message, setMessage] = useState(null);

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (response.ok) {
        dispatch(
          setLogin({ user: responseData.user, token: responseData.token })
        );
        localStorage.setItem("TOKEN_SM", responseData.token);
      } else {
        console.error("Login error:", responseData.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }

    setMessage(null);
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>

          {message && (
            <div className="alert">
              <p>{message}</p>
            </div>
          )}

          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
