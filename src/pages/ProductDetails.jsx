import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./ProductDetails.css";
import { ClipLoader } from "react-spinners";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="loading-container">
                <ClipLoader
                    size={50}
                    loading={loading}
                    color="blue"
                    speedMultiplier={1}
                />
                <p>Loading products...</p>
            </div>
        );
    }
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="detail-page">
            <button onClick={() => navigate(-1)}>← Back</button>

            <div className="detail-card">
                <img src={product.image} alt={product.title} />

                <div className="detail-info">
                    <p className="detail-category">{product.category}</p>
                    <h2>{product.title}</h2>
                    <p>Rating:  {product.rating.rate} ({product.rating.count} reviews)</p>
                    <p className="detail-price">${product.price}</p>
                    <p>{product.description}</p>
                    <button className="detail-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
