import React from "react";

export default function Form(props) {
  const { movie } = props;
  const [quantity, setQuantity] = React.useState(0);

  return (
    <form>
      <h3>{movie.name}</h3>
      <button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity === movie.availables}
      >
        +
      </button>
    </form>
  );
}
