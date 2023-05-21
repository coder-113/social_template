import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";
import React from "react";

export default function UserForm ()
{
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  // const { setNotification } = useStateContext();


  if (id)
  {
    useEffect(() =>
    {
      getUserById();
    }, []);
  }

  const getUserById = async () =>
  {
    axiosClient
      .get(`/user/${id}`)
      .then(({ data }) =>
      {
        // console.log(data);
        setUser(data.data);
      })
      .catch((err) =>
      {
        console.log(err);
      });

    // setLoading(true);
    // await fetch(`http://127.0.0.1:8000/api/user/${id}`, {
    //   method: "Post",
    //   body: {
    //     id: id,
    //   },
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then(({ user }) => {
    //     console.log(user);
    //     setUser(user);
    //   })
    //   .catch((error) => console.error("Error:", error));

    // setLoading(false);
  };

  const onSubmit = async (ev) =>
  {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("password_confirmation", user.password_confirmation);

    if (!id)
    {
      axiosClient
        .post("/user", formData)
        .then(({ data }) =>
        {
          console.log("success: " + data.success);
          // console.log("product: " + data.product);
        })
        .catch((err) =>
        {
          console.log(err);
        });
    } else
    {
      console.log(user);
      axiosClient
        .put(`/user/${id}`, user)
        .then(({ data }) =>
        {
          console.log("success: " + data.success);
          // console.log("product: " + data.product);
        })
        .catch((err) =>
        {
          console.log(err);
        });
    }

  };

  return (
    <>
      {user.id && <h1>Update User: {user.name}</h1>}
      {!user.id && <h1>New User</h1>}
      <div className="card animated fadeInDown">
        <form onSubmit={onSubmit}>
          <input
            value={user.name}
            onChange={(ev) => setUser({ ...user, name: ev.target.value })}
            placeholder="Name"
          />
          <input
            value={user.email}
            onChange={(ev) => setUser({ ...user, email: ev.target.value })}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(ev) => setUser({ ...user, password: ev.target.value })}
            placeholder="Password"
          />
          <input
            type="password"
            onChange={(ev) =>
              setUser({
                ...user,
                password_confirmation: ev.target.value,
              })
            }
            placeholder="Password Confirmation"
          />
          <button className="btn">Save</button>
        </form>
      </div>
    </>
  );
}
