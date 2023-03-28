import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";
import { products } from "../products";

export default function ProductDetails() {
  const router = useRouter();
  const { pid } = router.query;
  const found = products.find((product) => product.id === Number(pid));
  if (!found) {
    return <p>lording</p>;
  }
  return <ProductCard product={found} />;
}
