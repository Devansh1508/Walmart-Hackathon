import React from "react";

interface CategoryButtonProps {
  label: string;
  active?: boolean;
}

function CategoryButton({ label, active }: CategoryButtonProps) {
    
  return (
    <button
    //   onClick={onClick}
      className={`px-4 py-2 rounded-full text-nowrap transition ${
        active
          ? "bg-black text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

export default CategoryButton;
