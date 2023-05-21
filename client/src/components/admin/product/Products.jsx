import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosClient from "../../../axios-client";
import React from "react";

export default function Products ()
{
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() =>
  {
    getProducts();
  }, []);

  const onDeleteClick = async (user) =>
  {
    if (!window.confirm("Are you sure you want to delete this user?"))
    {
      return;
    }
    await axiosClient
      .delete(`product/${user.id}`)
      .then(({ data }) =>
      {
        console.log(data);
      })
      .catch((err) =>
      {
        console.log(err);
      });

    await getProducts();
  };

  const getProducts = async () =>
  {
    setLoading(true);

    await fetch("http://127.0.0.1:8000/api/product", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
      {
        setProducts(data);
      })
      .catch((error) => console.error("Error:", error));
    setLoading(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <h1>Products</h1>
        <Link className="btn-add" to="/admin/products/new">
          Add new
        </Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>slug</th>
              <th>category_id</th>
              <th>price</th>
              <th>image</th>
              <th>Actions</th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            </tbody>
          )}
          {!loading && (
            <tbody>
              {products.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.slug}</td>
                  <td>{u.category_name}</td>
                  <td>{u.price}</td>
                  <td>
                    <img
                      width={80}
                      src={"http://127.0.0.1:8000/api/images/" + u.image}
                      alt=""
                    />
                  </td>
                  <td>
                    <Link className="btn-edit" to={"/admin/products/" + u.id}>
                      Edit
                    </Link>
                    &nbsp;
                    <button
                      className="btn-delete"
                      onClick={() => onDeleteClick(u)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
