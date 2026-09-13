import React from 'react';
import { useStack } from '../context/StackContext';

export const StackSidebar: React.FC = () => {
  const { stack, removeFromStack, removeAll } = useStack();

  return (
    <div className="w-full xl:w-[320px] shrink-0 sticky top-8">
      <div className="bg-white border-2 border-gray-100 rounded-3xl p-5 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-1">Your Stack</h3>
        <p className="text-[13px] text-gray-400 mb-5">
          {stack.length === 0
            ? 'No technologies selected yet.'
            : `${stack.length} Technology${stack.length > 1 ? 's' : ''} Selected`}
        </p>

        <div className="space-y-2.5 min-h-[120px]">
          {stack.length === 0 ? (
            <div className="w-full h-24 border-2 border-dashed border-gray-100 rounded-2xl flex items-center justify-center text-sm text-gray-300">
              Your stack is empty.
            </div>
          ) : (
            stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2.5 border border-gray-100 rounded-2xl shadow-sm bg-white hover:border-gray-200 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 leading-none">{item.name}</span>
                    <span className="text-[10px] text-gray-400 mt-1">{item.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromStack(item.id, item.name)}
                  className="text-gray-300 hover:text-red-500 p-1 rounded-md transition-colors"
                  aria-label={`Remove ${item.name}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {stack.length > 0 && (
          <button
            onClick={removeAll}
            className="w-full mt-5 py-2.5 border border-red-200 text-red-500 font-semibold rounded-xl hover:bg-red-50 transition-colors text-sm"
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
};