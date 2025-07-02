import React from "react";
import ProductCard from "./ProductCard";
import products from "../../DummyData/products";
import type { Product } from "../../types/index";


const ProductGrid = () => {
  return (
    <div className="mt-10">
      <h1 className="w-[100vw] text-center">Popluar Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {products.map((product:Product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
