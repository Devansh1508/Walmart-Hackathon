import React from 'react';
import { PiPackage, PiCreditCard, PiArrowCounterClockwise } from 'react-icons/pi';
import SupportCard from './SupportCard';

const features = [
  {
    icon: <PiPackage />,
    title: 'EXPRESS DELIVERY',
    description: 'DHL express delivery worldwide from our bag company',
  },
  {
    icon: <PiCreditCard />,
    title: 'PAYMENT IN 3X',
    description: 'Take advantage of 3 payments with no fees from $100 of purchase',
  },
  {
    icon: <PiArrowCounterClockwise />,
    title: 'FREE RETURNS',
    description: 'Free return for 7 days for any order delivered in France',
  },
];

const SupportFeatures = () => {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-xl font-semibold mb-8">We Supported By</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <SupportCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SupportFeatures;
