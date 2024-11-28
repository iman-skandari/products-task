import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { LockOutlined } from "@ant-design/icons";

const Navbar = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // فیلتر کردن محصولات اگر طول ورودی بیشتر از 3 حرف باشد
    if (value.length > 3) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      // اگر ورودی کمتر از 3 حرف باشد، همه محصولات را نمایش دهید
      setFilteredProducts(products);
    }
  };

  return (
    <main>
      <div className="bg-light p-4 w-100">
        <div className="d-flex gap-2 justify-content-center cursor-pointer text-black align-items-center">
          <h3 className="custom-font"> ورود/ثبت نام</h3>
          <LockOutlined />
        </div>
      </div>
      <div className="d-flex justify-content-evenly align-items-center mt-4 p-3">
        <div>
          <h1
            className="text-danger"
            style={{ fontSize: "24px", cursor: "pointer" }}
          >
            محصولات
          </h1>
        </div>
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="جستجو..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              width: "400px",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              borderRight: "none",
            }}
          />
          <button
            className="btn btn-primary"
            style={{
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              borderLeft: "none",
            }}
          >
            جستجو
          </button>
        </div>
        <div
          className="d-flex gap-3"
          style={{ cursor: "pointer", color: "#6c757d" }}
        >
          <h3 className="mb-0 mx-2" style={{ fontSize: "16px" }}>
            Home
          </h3>
          <h3 className="mb-0 mx-2" style={{ fontSize: "16px" }}>
            Contact
          </h3>
          <h3 className="mb-0 mx-2" style={{ fontSize: "16px" }}>
            About
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
