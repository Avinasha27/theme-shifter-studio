import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Palette, Code, Zap, Users, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Dynamic Theming',
      description: 'Experience three completely different visual themes that change layout, typography, and design language.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Modern Technology',
      description: 'Built with React, TypeScript, Tailwind CSS, and cutting-edge development practices.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Smooth Transitions',
      description: 'Enjoy seamless theme switching with beautiful animations and persistent preferences.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User-Centered Design',
      description: 'Each theme is carefully crafted to provide a unique but intuitive user experience.'
    }
  ];

  const ThemeShowcase = () => (
    <div className="space-y-6">
      <h3 className={`font-bold ${currentTheme === 'theme-2' ? 'text-2xl' : 'text-xl'}`}>
        Theme Showcase
      </h3>
      <div className="grid gap-4">
        <Card className="theme-transition">
          <CardHeader>
            <CardTitle className="text-lg">Theme 1: Minimalist Light</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Clean, spacious design with subtle shadows and modern typography. Perfect for users who prefer simplicity and clarity.</p>
          </CardContent>
        </Card>
        
        <Card className="theme-transition">
          <CardHeader>
            <CardTitle className="text-lg">Theme 2: Dark Sophisticated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Rich dark colors with elegant serif typography and sidebar navigation. Designed for professionals and extended reading sessions.</p>
          </CardContent>
        </Card>
        
        <Card className="theme-transition">
          <CardHeader>
            <CardTitle className="text-lg">Theme 3: Vibrant Playful</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Colorful, rounded design with playful fonts and engaging card layouts. Perfect for creative projects and younger audiences.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Theme 2 uses sidebar layout
  if (currentTheme === 'theme-2') {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <Sidebar className="theme-transition">
            <div className="p-4">
              <SidebarTrigger />
            </div>
            <SidebarContent className="p-6">
              <nav className="space-y-4">
                <h3 className="font-semibold text-lg">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <Button variant="ghost" className="w-full justify-start">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Overview
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Technology
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Features
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Design Philosophy
                    </Button>
                  </li>
                </ul>
              </nav>
              
              <div className="mt-8">
                <ThemeShowcase />
              </div>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 pt-20 pb-12 px-8">
            <div className="max-w-4xl">
              <header className="mb-12">
                <h1 className="text-5xl font-bold mb-6 theme-transition">
                  About ThemeForge
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  ThemeForge represents the pinnacle of adaptive web design, where aesthetics meet functionality in perfect harmony. Our application demonstrates how different visual paradigms can coexist within a single platform.
                </p>
              </header>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-muted-foreground mb-4">
                    We believe that design is not merely about appearance—it's about creating experiences that resonate with different users, contexts, and moods. Each theme in ThemeForge tells a different story and serves a different purpose.
                  </p>
                  <p className="text-muted-foreground">
                    The sophisticated dark theme you're experiencing now emphasizes readability and elegance, perfect for professional environments and extended content consumption.
                  </p>
                </div>
              </section>

              <section className="grid gap-8">
                <h2 className="text-3xl font-bold">Key Features</h2>
                {features.map((feature, index) => (
                  <Card key={index} className="theme-transition">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className="text-primary">{feature.icon}</div>
                        <span>{feature.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </section>
            </div>
          </main>
        </div>
      </SidebarProvider>
    );
  }

  // Theme 1 and 3 use standard layout
  const getLayoutClasses = () => {
    switch (currentTheme) {
      case 'theme-1':
        return 'pt-20 pb-12 px-4 max-w-4xl mx-auto';
      case 'theme-3':
        return 'pt-20 pb-12 px-4 max-w-6xl mx-auto';
      default:
        return 'pt-20 pb-12 px-4 max-w-4xl mx-auto';
    }
  };

  return (
    <main className={getLayoutClasses()}>
      <header className="text-center mb-16">
        <h1 className={`font-bold mb-6 theme-transition ${
          currentTheme === 'theme-1' ? 'text-4xl md:text-5xl' : 'text-4xl md:text-5xl'
        }`}>
          {currentTheme === 'theme-3' ? '🎨 About ThemeForge 🎨' : 'About ThemeForge'}
        </h1>
        <p className={`text-muted-foreground mx-auto theme-transition ${
          currentTheme === 'theme-1' ? 'text-lg max-w-2xl' : 'text-lg max-w-2xl'
        }`}>
          {currentTheme === 'theme-3' 
            ? 'Welcome to the most amazing theme-switching adventure! ✨ Discover how design can be fun, functional, and absolutely magical! 🌈'
            : 'Discover the power of adaptive design with three unique themes that transform your entire user experience.'
          }
        </p>
      </header>

      <section className="mb-16">
        <h2 className={`font-bold mb-8 text-center ${
          currentTheme === 'theme-3' ? 'text-3xl' : 'text-2xl'
        }`}>
          {currentTheme === 'theme-3' ? '🚀 Amazing Features 🚀' : 'Key Features'}
        </h2>
        
        <div className={`grid gap-6 ${
          currentTheme === 'theme-3' ? 'md:grid-cols-2' : 'md:grid-cols-2'
        }`}>
          {features.map((feature, index) => (
            <Card key={index} className={`theme-transition ${
              currentTheme === 'theme-3' ? 'rounded-2xl gradient-theme3' : ''
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="text-primary">{feature.icon}</div>
                  <span className={currentTheme === 'theme-3' ? 'text-lg' : ''}>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="mb-16">
        <ThemeShowcase />
      </div>

      <section className="text-center">
        <h2 className={`font-bold mb-4 ${
          currentTheme === 'theme-3' ? 'text-3xl' : 'text-2xl'
        }`}>
          {currentTheme === 'theme-3' ? '🎯 Ready to Explore? 🎯' : 'Ready to Explore?'}
        </h2>
        <p className="text-muted-foreground mb-8">
          {currentTheme === 'theme-3' 
            ? 'Try switching themes and see the magic happen! Each one is a completely different adventure! 🎪'
            : 'Switch between themes to experience how design can completely transform user interaction.'
          }
        </p>
        <Button 
          size="lg" 
          className={`theme-transition ${
            currentTheme === 'theme-3' ? 'rounded-full px-8' : ''
          }`}
        >
          {currentTheme === 'theme-3' ? '🏠 Back to Home! 🏠' : 'Back to Home'}
        </Button>
      </section>
    </main>
  );
};

export default About;