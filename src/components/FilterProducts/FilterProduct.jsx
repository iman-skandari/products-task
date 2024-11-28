import React, { useState } from 'react';
import "./FilterProduct.css"
const FilterProduct = ({ products, setFilteredProducts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilter = () => {
        let filtered = products;

        // فیلتر بر اساس نام
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // فیلتر بر اساس کتگوری
        if (category) {
            filtered = filtered.filter(product => product.category === category);
        }

        // فیلتر بر اساس قیمت
        if (minPrice) {
            filtered = filtered.filter(product => product.price >= minPrice);
        }
        if (maxPrice) {
            filtered = filtered.filter(product => product.price <= maxPrice);
        }

        setFilteredProducts(filtered);
    }

    return (
        <div className="filter-container d-flex flex-column align-items-center my-4">
            <input
                type="text"
                className="form-control mb-2"
                placeholder="جستجو بر اساس نام..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select className="form-select mb-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">همه کتگوری‌ها</option>
                <option value="electronics">الکترونیک</option>
                <option value="jewelery">جواهرات</option>
                <option value="men's clothing">لباس مردانه</option>
                <option value="women's clothing">لباس زنانه</option>
            </select>
            <div className="input-group mb-2">
                <span className="input-group-text">$</span>
                <input
                    type="number"
                    className="form-control"
                    placeholder="حداقل قیمت"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">$</span>
                <input
                    type="number"
                    className="form-control"
                    placeholder="حداکثر قیمت"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleFilter}>فیلتر</button>
        </div>
    )
}

export default FilterProduct
