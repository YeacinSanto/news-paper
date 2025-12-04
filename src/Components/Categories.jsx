import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json") // Must be in /public
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="font-bold">All categories</h2>
      <div className="grid grid-cols-1 mt-5 gap-3 p-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className="btn bg-base-100 border-0 hover:bg-base-200 text-accent font-semibold"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
