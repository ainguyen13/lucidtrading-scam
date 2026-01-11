import React from 'react';

interface InfoCardProps {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = ({ label, value, subtext, highlight = false }) => {
  return (
    <div className={`p-6 rounded-xl border ${highlight ? 'bg-red-50 border-red-200' : 'bg-white border-slate-200'}`}>
      <h4 className="text-slate-600 text-sm font-medium uppercase tracking-wider mb-2">{label}</h4>
      <div className={`text-3xl md:text-4xl font-mono font-bold mb-1 ${highlight ? 'text-red-600' : 'text-slate-900'}`}>
        {value}
      </div>
      {subtext && <p className="text-slate-500 text-sm">{subtext}</p>}
    </div>
  );
};