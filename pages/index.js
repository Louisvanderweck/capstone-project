import Heading from "../components/Heading";
import ProductCard from "../components/ProductCard";
import { products } from "./products";
import Button from "../components/Button";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [filter, setFilter] = useState("");

  function updateFilter(newFilter) {
    setFilter(newFilter);
  }

  const filteredProducts = products.filter(
    (product) => product.type === filter || filter === ""
  );
  return (
    <main>
      <Heading>Capstone von Louis</Heading>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "40px",
        }}
      >
        <Button titel="Ringe" onClick={() => updateFilter("ring")} />
        <Button titel="Ketten" onClick={() => updateFilter("nack")} />
        <Button titel="Ohrringe" onClick={() => updateFilter("ear")} />
        <Button titel="X" onClick={() => updateFilter("")} />
        {/* <div>Ringe</div>
        <div>Ketten</div>
        <div>Ohrringe</div> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
          // background: "yellow",
        }}
      >
        {filteredProducts.map((product) => {
          return (
            <Link href={`/products2/${product.id}`} key={product.id}>
              <ProductCard key={product.id} product={product} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
