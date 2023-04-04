import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      style={{
        flex: 1,
        border: "1px solid black",
        width: "400px",
        height: "550px",
      }}
    >
      <Image alt={product.name} src={product.Image} width="350" height="300" />
      <h1>{product.name}</h1>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <br />
    </div>
  );
};

export default ProductCard;
