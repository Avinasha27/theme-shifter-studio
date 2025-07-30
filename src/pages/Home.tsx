import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Palette } from 'lucide-react';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading, error } = useProducts();

  const getLayoutClasses = () => {
    switch (currentTheme) {
      case 'theme-1':
        return 'pt-20 pb-12 px-4 max-w-6xl mx-auto';
      case 'theme-2':
        return 'pt-20 pb-12 px-6 max-w-7xl mx-auto';
      case 'theme-3':
        return 'pt-20 pb-12 px-4';
      default:
        return 'pt-20 pb-12 px-4 max-w-6xl mx-auto';
    }
  };

  const getHeroClasses = () => {
    switch (currentTheme) {
      case 'theme-1':
        return 'text-center mb-16 space-y-6';
      case 'theme-2':
        return 'mb-16 space-y-8 max-w-4xl';
      case 'theme-3':
        return 'text-center mb-16 space-y-6 max-w-4xl mx-auto';
      default:
        return 'text-center mb-16 space-y-6';
    }
  };

  const getGridClasses = () => {
    switch (currentTheme) {
      case 'theme-1':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6';
      case 'theme-2':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      case 'theme-3':
        return 'max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6';
    }
  };

  const renderFeatures = () => {
    const features = [
      {
        icon: <Palette className="w-6 h-6" />,
        title: 'Three Unique Themes',
        description: 'Switch between minimalist, sophisticated, and playful designs'
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Smooth Transitions',
        description: 'Experience seamless theme switching with beautiful animations'
      },
      {
        icon: <Sparkles className="w-6 h-6" />,
        title: 'Responsive Design',
        description: 'Perfect experience across all devices and screen sizes'
      }
    ];

    if (currentTheme === 'theme-1') {
      return (
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  if (loading) {
    return (
      <div className={getLayoutClasses()}>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={getLayoutClasses()}>
        <div className="text-center py-16">
          <p className="text-destructive">Error loading products: {error}</p>
          <Button 
            onClick={() => window.location.reload()} 
            className="mt-4"
            variant="outline"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className={getLayoutClasses()}>
      <section className={getHeroClasses()}>
        <h1 className={`font-bold mb-4 theme-transition ${
          currentTheme === 'theme-1' ? 'text-4xl md:text-5xl' :
          currentTheme === 'theme-2' ? 'text-5xl md:text-6xl' :
          'text-4xl md:text-5xl'
        }`}>
          {currentTheme === 'theme-1' && 'Discover Amazing Products'}
          {currentTheme === 'theme-2' && 'Curated Collection of Excellence'}
          {currentTheme === 'theme-3' && '🌟 Magical Shopping Experience! 🌟'}
        </h1>
        
        <p className={`text-muted-foreground mx-auto theme-transition ${
          currentTheme === 'theme-1' ? 'text-lg max-w-2xl' :
          currentTheme === 'theme-2' ? 'text-xl max-w-3xl' :
          'text-lg max-w-2xl'
        }`}>
          {currentTheme === 'theme-1' && 
            'Experience our clean, minimalist interface designed for effortless browsing and shopping.'
          }
          {currentTheme === 'theme-2' && 
            'Immerse yourself in a sophisticated shopping environment where quality meets elegance. Every product has been carefully selected for the discerning customer.'
          }
          {currentTheme === 'theme-3' && 
            'Welcome to the most fun shopping experience ever! Discover amazing products in our colorful, joyful marketplace! ✨'
          }
        </p>

        <div className={`flex gap-4 ${currentTheme === 'theme-2' ? '' : 'justify-center'}`}>
          <Button 
            size="lg" 
            className={`theme-transition ${
              currentTheme === 'theme-3' ? 'rounded-full px-8' : ''
            }`}
          >
            {currentTheme === 'theme-3' ? '🛍️ Shop Now!' : 'Shop Now'}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className={`theme-transition ${
              currentTheme === 'theme-3' ? 'rounded-full px-8' : ''
            }`}
          >
            Learn More
          </Button>
        </div>
      </section>

      {renderFeatures()}

      <section>
        <h2 className={`font-bold mb-8 theme-transition ${
          currentTheme === 'theme-1' ? 'text-2xl text-center' :
          currentTheme === 'theme-2' ? 'text-3xl' :
          'text-2xl text-center'
        }`}>
          {currentTheme === 'theme-3' ? '🎨 Featured Products 🎨' : 'Featured Products'}
        </h2>
        
        <div className={getGridClasses()}>
          {products.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;