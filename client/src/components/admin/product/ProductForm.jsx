import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";
import React from "react";

export default function ProductForm ()
{
  let { id } = useParams();
  const [product, setProduct] = useState({
    id: null,
    name: "",
    slug: "",
    image: null,
    category_id: "",
    price: null,
  });
  const [categories, setCategories] = useState([]);

  useEffect(() =>
  {
    getCategories();
  }, []);

  if (id)
  {
    useEffect(() =>
    {
      getProductById();
    }, []);
  }

  const getCategories = async () =>
  {
    axiosClient
      .get("/category")
      .then(({ data }) =>
      {
        // console.log(data);
        setCategories(data);
      })
      .catch((err) =>
      {
        console.log(err);
      });
  };

  const getProductById = async () =>
  {
    axiosClient
      .get(`/product/${id}`)
      .then(({ data }) =>
      {
        // console.log(data);
        setProduct(data.data);
      })
      .catch((err) =>
      {
        console.log(err);
      });

    // await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((product) => {
    //     console.log(product);
    //     setProduct(product);
    //   })
    //   .catch((error) => console.error("Error:", error));
  };

  const onSubmit = async (ev) =>
  {
    ev.preventDefault();

    const formData = new FormData();
    // formData.append("id", product.id);
    formData.append("name", product.name);
    formData.append("slug", product.slug);
    formData.append("image", product.image);
    formData.append("category_id", product.category_id);
    formData.append("price", product.price);
    // console.log(formData);
    // console.log(product);

    if (!id)
    {
      axiosClient
        .post("/product", formData)
        .then(({ data }) =>
        {
          console.log("success: " + data.success);
          // console.log("product: " + data.product);
        })
        .catch((err) =>
        {
          console.log(err);
        });

      // await fetch("http://127.0.0.1:8000/api/product", {
      //   method: "post",
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("success: " + data.success);
      //     console.log("product: " + data.product);
      //   })
      //   .catch((err) => console.log(err));
    } else
    {
      // const data = {
      //   name: product.name,
      //   slug: product.slug,
      //   category_id: product.category_id,
      //   price: product.price,
      // };
      console.log(product);
      axiosClient
        .put(`/product/${id}`, product)
        .then(({ data }) =>
        {
          console.log("success: " + data.success);
          // console.log("product: " + data.product);
        })
        .catch((err) =>
        {
          console.log(err);
        });

      // await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
      //   method: "patch",
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("success: " + data.success);
      //     console.log("product: " + data.product);
      //   })
      //   .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {product.id && <h1>Update Product: {product.name}</h1>}
      {!product.id && <h1>New Product</h1>}
      <div className="card animated fadeInDown">
        <form onSubmit={onSubmit}>
          <input
            value={product.name}
            onChange={(ev) =>
            {
              setProduct({ ...product, name: ev.target.value });
            }}
            placeholder="Name"
          />
          <input
            value={product.slug}
            onChange={(ev) => setProduct({ ...product, slug: ev.target.value })}
            placeholder="slug"
          />
          <input
            value={product.price}
            onChange={(ev) =>
              setProduct({ ...product, price: ev.target.value })
            }
            placeholder="price"
          />
          <select
            value={product.id ? product.category_id : categories.category_id}
            onChange={(ev) =>
              setProduct({ ...product, category_id: ev.target.value })
            }>
            <option value="" selected={product.id ? false : true}>
              Select a category
            </option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                selected={product.category_id == category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div>
            <input
              type="file"
              onChange={(ev) =>
                setProduct({ ...product, image: ev.target.files[0] })
              }
              placeholder="image"
            />
            {typeof product.image === "string" && (
              <img
                width={60}
                src={"http://127.0.0.1:8000/api/images/" + product.image}
                alt=""
              />
            )}
          </div>
          <br />
          <button className="btn">Save</button>
        </form>
      </div>
    </>
  );
}
