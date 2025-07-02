import React from 'react';

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-xl shadow-sm">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-sm font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};

export default SupportCard;
