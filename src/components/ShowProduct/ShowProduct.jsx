import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/navbar';

const ShowProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setError(error.message);
            }
        };

        fetchProduct();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!product) return <p>در حال بارگذاری...</p>;

    return (
        <div className="container mt-5 mb-5">
            <div>
               
            </div>
            <h1 className="text-center mb-4">{product.title}</h1>
            <img src={product.image} alt={product.title} className="img-fluid" />
            <p>{product.description}</p>
            <p><strong>قیمت: ${product.price}</strong></p>
            <Link to="/">بازگشت به لیست محصولات</Link>
        </div>
    )
}

export default ShowProduct
