import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(product);

  useEffect(() => {
    const getProduct = async (id) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };

    getProduct(id);
  }, [id]);

  if (!product && loading) return <h2>Loading...</h2>;

  return (
    <div>
      <img src={product.image || ""} alt="" />
      <h4>{product.title || ""}</h4>
    </div>
  );
}
