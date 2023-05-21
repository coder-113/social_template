import { useEffect, useState } from "react";
import { setLogout, setUser } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Dashboard() {
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    axiosClient
      .get("/user")
      .then(({ data }) => {
        console.log(data);
        dispatch(setUser({ user: data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onLogout = async (ev) => {
    ev.preventDefault();

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
    <div id="dashboardLayout">
      <aside>
        <Link to={"/admin/users"}>User</Link>
        <Link to={"/admin/products"}>Products</Link>
        {/* <Link to={"/admin/users"}>User</Link> */}
      </aside>
      <div className="content">
        <header>
          <div>header</div>
          <div>
            {user && <h2>{user.name}</h2>}
            <a href="#" className="btn-logout" onClick={onLogout}>
              Logout
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
