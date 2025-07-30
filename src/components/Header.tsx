import React from 'react';
import { useTheme, Theme } from '@/contexts/ThemeContext';
import Navigation from './Navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Palette } from 'lucide-react';

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();

  const themeOptions = [
    { value: 'theme-1', label: 'Minimalist Light' },
    { value: 'theme-2', label: 'Dark Sophisticated' },
    { value: 'theme-3', label: 'Vibrant Playful' },
  ];

  const handleThemeChange = (value: string) => {
    setTheme(value as Theme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border theme-transition">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Palette className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">
            ThemeForge
          </h1>
        </div>

        <Navigation />

        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            {currentTheme === 'theme-3' ? '🎨 Theme:' : 'Choose Theme:'}
          </span>
          <Select value={currentTheme} onValueChange={handleThemeChange}>
            <SelectTrigger className={`w-[180px] theme-transition ${
              currentTheme === 'theme-3' ? 'rounded-full' : ''
            }`}>
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              {themeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Header;