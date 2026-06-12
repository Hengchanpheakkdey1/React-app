import "./Card.css";

const Card = ({ title, description, price, onDelete, onView }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-price">{price}</p>

      <button className="card-delete" onClick={onDelete}>
        Delete
      </button>
      <button className="card-delete" onClick={onView}>
        View Detail
      </button>
    </div>
  );
};

export default Card;
