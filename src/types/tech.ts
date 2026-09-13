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
  removeFromStack: (id: string, name: string) => void;
  removeAll: () => void;
  isSelected: (id: string) => boolean;
}