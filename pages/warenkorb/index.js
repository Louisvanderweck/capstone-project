import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

import Link from "next/link";
export default function Warenkorb() {
  return products.map((product) => {
    return (
      <Link href={`/product/${product.id}`} key={product.id}>
        <ProductCard key={product.id} product={product} />
      </Link>
    );
  });
}
