import React from 'react';
import LogoCard from '../LogoCard/LogoCard';
import { logos } from '../../DummyData/logos';
import type { Logo } from '../../types/index';

const SupportSection: React.FC = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-xl font-semibold mb-6">We Supported By</h2>

      <div className="grid mt-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
        {logos.map((logo:Logo) => (
          <LogoCard key={logo.alt} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
};

export default SupportSection;
