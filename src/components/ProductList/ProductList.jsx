import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import FilterProduct from '../FilterProducts/FilterProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <Navbar products={products} setFilteredProducts={setFilteredProducts} />
            <FilterProduct products={products} setFilteredProducts={setFilteredProducts} />
            <h1 className="text-center mb-4">محصولات تجاری</h1>
            <div className="row">
                {filteredProducts.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <div className="card d-flex flex-column hover-effect" style={{ height: '100%', cursor: 'pointer' }}>
                                <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                                <div className="card-body d-flex flex-column flex-grow-1">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><strong>قیمت: ${product.price.toFixed(2)}</strong></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
