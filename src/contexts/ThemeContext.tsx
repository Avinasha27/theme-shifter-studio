import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'theme-1' | 'theme-2' | 'theme-3';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('theme-1');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme && ['theme-1', 'theme-2', 'theme-3'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    }
    setIsLoading(false);
  }, []);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('app-theme', theme);
    
    // Apply theme class to document
    document.documentElement.className = theme;
    
    // Trigger theme switch animation
    document.body.style.animation = 'themeSwitch 0.5s ease-in-out';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 500);
  };

  useEffect(() => {
    if (!isLoading) {
      document.documentElement.className = currentTheme;
    }
  }, [currentTheme, isLoading]);

  const value = {
    currentTheme,
    setTheme,
    isLoading,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};