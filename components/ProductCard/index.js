import Image from "next/image";
import { ProductCardContainer, ProductName, ProductImage } from "../../styles";

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer key={product.id}>
      <ProductImage>
        <Image
          alt={product.name}
          src={product.Image}
          width={200}
          height={200}
        />
      </ProductImage>
      <ProductName>{product.name}</ProductName>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <br />
    </ProductCardContainer>
  );
};

export default ProductCard;
