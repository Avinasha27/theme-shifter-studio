import React from 'react';
import { Product } from '@/hooks/useProducts';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme();

  const getShadowClass = () => {
    switch (currentTheme) {
      case 'theme-1':
        return 'card-shadow-theme1';
      case 'theme-2':
        return 'card-shadow-theme2';
      case 'theme-3':
        return 'card-shadow-theme3';
      default:
        return 'card-shadow-theme1';
    }
  };

  const getCardClasses = () => {
    const baseClasses = 'theme-transition hover:scale-105 duration-300';
    const shadowClasses = getShadowClass();
    
    if (currentTheme === 'theme-3') {
      return `${baseClasses} ${shadowClasses} rounded-2xl gradient-theme3`;
    }
    
    return `${baseClasses} ${shadowClasses}`;
  };

  return (
    <Card className={getCardClasses()}>
      <CardHeader className="p-4">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <h3 className={`font-semibold mb-2 line-clamp-2 ${
          currentTheme === 'theme-2' ? 'text-lg' : 'text-base'
        }`}>
          {product.title}
        </h3>
        
        <p className={`text-muted-foreground mb-3 line-clamp-2 ${
          currentTheme === 'theme-3' ? 'text-sm' : 'text-sm'
        }`}>
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className={`font-bold ${
            currentTheme === 'theme-2' ? 'text-xl' : 'text-lg'
          } text-primary`}>
            ${product.price}
          </span>
          
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">
              {product.rating.rate}
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className={`w-full theme-transition ${
            currentTheme === 'theme-3' ? 'rounded-full' : ''
          }`}
          variant={currentTheme === 'theme-2' ? 'outline' : 'default'}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;