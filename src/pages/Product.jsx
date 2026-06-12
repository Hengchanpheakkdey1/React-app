import { useEffect, useState } from "react";
import Card from "../component/Card";
import { useNavigate } from "react-router";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getProduct = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        }
      };

      getProduct();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleOnView = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };

  return (
    <div>
      {loading && <h4>Loading .........</h4>}
      {!loading && (
        <>
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              onDelete={() => handleDelete(product.id)}
              onView={() => handleOnView(product.id)}
            />
          ))}
        </>
      )}
    </div>
  );
}
