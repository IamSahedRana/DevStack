import { createContext, useContext, useState, type ReactNode } from 'react';
import { toast } from 'react-toastify';

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}


export interface StackContextType {
  stack: Technology[];
  addToStack: (tech: Technology) => void;
  removeFromStack: (id: string, name?: string) => void;
  removeAll: () => void;
  isSelected: (id: string) => boolean;
  toggleStack: (tech: Technology) => void;
}

const StackContext = createContext<StackContextType | undefined>(undefined);

export const StackProvider = ({ children }: { children: ReactNode }) => {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (item: Technology) => {
    if (!stack.find((t) => t.id === item.id)) {
      setStack((prev) => [...prev, item]);
      toast.success(`${item.name} added to your stack!`);
    }
  };

  const removeFromStack = (id: string, name?: string) => {
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (name) toast.info(`${name} removed from your stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.warn('Stack cleared.');
  };

  const toggleStack = (item: Technology) => {
    if (stack.find((t) => t.id === item.id)) {
      removeFromStack(item.id, item.name);
    } else {
      addToStack(item);
    }
  };

  const isSelected = (id: string) => stack.some((t) => t.id === id);

  return (
    <StackContext.Provider
      value={{ stack, addToStack, removeFromStack, removeAll, isSelected, toggleStack }}
    >
      {children}
    </StackContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStack = () => {
  const context = useContext(StackContext);
  if (!context) throw new Error('useStack must be used within StackProvider');
  return context;
};



