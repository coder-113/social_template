import { setLogout } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate, Link } from "react-router-dom";

export default function Homescreen() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  // console.log(token);
  // console.log(user.email);

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  const handleLogout = async () => {
    await fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));

    dispatch(setLogout());
    localStorage.removeItem("TOKEN_SM");
  };

  return (
    <div id="homeLayout">
      <div>
        <Link to={"/admin"}>Admin</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Outlet />
    </div>
  );
}
