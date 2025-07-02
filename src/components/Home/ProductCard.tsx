import React from 'react';
import { FaHeart, FaLock } from 'react-icons/fa';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="rounded-xl cursor-pointer hover:shadow-md transition-all duration-500 flex flex-col"
        style={{backgroundColor:'var(--secondary-color)'}}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full object-cover" />
        <div className="absolute top-2 right-2 flex gap-2">
          <div className="bg-white border cursor-pointer rounded-full p-1">
            <FaHeart size={16} />
          </div>
          <div className="bg-white border cursor-pointer rounded-full p-1">
            <FaLock size={16} />
          </div>
        </div>
      </div>
      <div className="mt-4 px-4 text-sm">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
