import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "", icon }) => {
  return (
    <section id={id} className={`py-12 md:py-20 border-b border-slate-200 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {title && (
          <div className="flex items-center gap-3 mb-8">
            {icon && <span className="text-red-600">{icon}</span>}
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
          </div>
        )}
        <div className="text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};