
import React, { useEffect, useState } from 'react';
import { useStack, type Technology } from '../context/StackContext';

const getBadgeColor = (badge: string): string => {
  const colors: Record<string, string> = {
    Popular: 'bg-blue-50 text-blue-500',
    Versatile: 'bg-green-50 text-green-500',
    Fast: 'bg-orange-50 text-orange-500',
    'Top SQL': 'bg-indigo-50 text-indigo-500',
    Flexible: 'bg-purple-50 text-purple-500',
    Essential: 'bg-blue-50 text-blue-500',
    Enterprise: 'bg-slate-100 text-slate-600',
    'Batteries Included': 'bg-emerald-50 text-emerald-600',
    Compiler: 'bg-orange-50 text-orange-500',
    Containers: 'bg-sky-50 text-sky-500',
    Orchestration: 'bg-blue-50 text-blue-600',
  };

  return colors[badge] || 'bg-gray-100 text-gray-500';
};

export const TechCard: React.FC<{ tech: Technology }> = ({ tech }) => {
  const { isSelected, addToStack } = useStack();
  const selected = isSelected(tech.id);

  const isBeginnerFriendly = tech.difficulty === 'Beginner-Friendly';

  return (
    <div
      onClick={() => {
        if (!selected) addToStack(tech);
      }}
      className={`group relative rounded-2xl p-[2px] transition-all duration-300 select-none ${
        selected
          ? 'bg-gradient-to-r from-[#8a38cc] via-[#d946ef] to-[#f59e0b] shadow-md'
          : 'bg-transparent hover:bg-gradient-to-r hover:from-[#8a38cc] hover:via-[#d946ef] hover:to-[#f59e0b]'
      }`}
    >
      {/* Card content */}
      <div
        className={`relative flex h-full flex-col rounded-[14px] p-6 transition-all duration-300 ${
          selected
            ? 'bg-white cursor-default'
            : 'border-2 border-gray-100 bg-white cursor-pointer group-hover:border-transparent'
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 p-2">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>

          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
              selected && isBeginnerFriendly
                ? 'bg-pink-50 text-pink-500'
                : getBadgeColor(tech.badge)
            }`}
          >
            {selected && isBeginnerFriendly ? 'Easy Start' : tech.badge}
          </span>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {tech.name}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
            {tech.description}
          </p>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium mb-5">
          <span className="bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-100">
            {tech.category}
          </span>

          <span className="bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-100">
            {tech.difficulty}
          </span>

          <span className="flex items-center gap-1 ml-auto font-semibold">
            <svg
              className="w-3.5 h-3.5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            {tech.rating}
          </span>
        </div>

        <div className="mt-auto h-10 flex items-center justify-center">
          {selected ? (
            <span className="text-[#8a38cc] font-bold text-[15px] flex items-center gap-1.5">
              ✓ Added to Stack
            </span>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToStack(tech);
              }}
              className="w-full py-2.5 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white shadow-sm"
            >
              Add to Stack
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function TechGrid() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => console.error('Failed to load tech data', err));
  }, []);

  if (loading) {
    return (
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-72 bg-gray-50 rounded-2xl border border-gray-100"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </div>
  );
}