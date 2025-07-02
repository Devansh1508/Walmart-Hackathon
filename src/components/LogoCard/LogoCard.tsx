import React from 'react';

interface LogoCardProps {
  src: string;
  alt: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ src, alt }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md flex items-center justify-center h-20">
      <img src={src} alt={alt} className="max-h-20 object-cover" />
    </div>
  );
};

export default LogoCard;
