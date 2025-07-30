import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Home, Info, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const { currentTheme } = useTheme();

  const navItems = [
    { to: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { to: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { to: '/contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const getNavClasses = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = 'transition-colors duration-200';
    
    if (currentTheme === 'theme-3') {
      return `${baseClasses} ${isActive 
        ? 'bg-primary text-primary-foreground rounded-full px-4 py-2' 
        : 'text-muted-foreground hover:text-foreground hover:bg-muted rounded-full px-4 py-2'
      }`;
    }
    
    if (currentTheme === 'theme-2') {
      return `${baseClasses} ${isActive 
        ? 'text-primary border-b-2 border-primary pb-1' 
        : 'text-muted-foreground hover:text-foreground'
      }`;
    }
    
    // Theme 1
    return `${baseClasses} ${isActive 
      ? 'text-primary font-medium' 
      : 'text-muted-foreground hover:text-foreground'
    }`;
  };

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={getNavClasses}
          end={item.to === '/'}
        >
          <span className="flex items-center space-x-2">
            {currentTheme === 'theme-3' && item.icon}
            <span>{item.label}</span>
          </span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;