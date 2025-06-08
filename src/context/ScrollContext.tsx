import React, { createContext, useContext, useState } from 'react';

interface ScrollContextType {
  showScrollTop: boolean;
  setShowScrollTop: (show: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  return (
    <ScrollContext.Provider value={{ showScrollTop, setShowScrollTop }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
}; 