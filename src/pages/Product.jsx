import { useEffect, useState } from "react";
import Card from "../component/Card";
import { useNavigate } from "react-router";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleView = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <h4>Loading...</h4>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          onDelete={() => handleDelete(product.id)}
          onView={() => handleView(product.id)}
        />
      ))}
    </div>
  );
}
