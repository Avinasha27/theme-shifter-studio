import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: currentTheme === 'theme-3' ? '🎉 Message Sent!' : 'Message Sent!',
      description: currentTheme === 'theme-3' 
        ? 'Thanks for reaching out! We\'ll get back to you super soon! ✨'
        : 'Thank you for your message. We\'ll get back to you soon!',
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'hello@themeforge.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Address',
      value: '123 Design Street, Creative City, CC 12345'
    }
  ];

  const getLayoutClasses = () => {
    switch (currentTheme) {
      case 'theme-1':
        return 'pt-20 pb-12 px-4 max-w-4xl mx-auto';
      case 'theme-2':
        return 'pt-20 pb-12 px-6 max-w-5xl mx-auto';
      case 'theme-3':
        return 'pt-20 pb-12 px-4 max-w-6xl mx-auto';
      default:
        return 'pt-20 pb-12 px-4 max-w-4xl mx-auto';
    }
  };

  const getFormClasses = () => {
    switch (currentTheme) {
      case 'theme-1':
        return 'card-shadow-theme1';
      case 'theme-2':
        return 'card-shadow-theme2';
      case 'theme-3':
        return 'card-shadow-theme3 rounded-2xl gradient-theme3';
      default:
        return 'card-shadow-theme1';
    }
  };

  return (
    <main className={getLayoutClasses()}>
      <header className="text-center mb-16">
        <h1 className={`font-bold mb-6 theme-transition ${
          currentTheme === 'theme-1' ? 'text-4xl md:text-5xl' :
          currentTheme === 'theme-2' ? 'text-5xl md:text-6xl' :
          'text-4xl md:text-5xl'
        }`}>
          {currentTheme === 'theme-3' ? '📞 Get in Touch! 📞' : 'Get in Touch'}
        </h1>
        <p className={`text-muted-foreground mx-auto theme-transition ${
          currentTheme === 'theme-1' ? 'text-lg max-w-2xl' :
          currentTheme === 'theme-2' ? 'text-xl max-w-3xl' :
          'text-lg max-w-2xl'
        }`}>
          {currentTheme === 'theme-1' && 
            'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
          }
          {currentTheme === 'theme-2' && 
            'Your thoughts and inquiries are invaluable to us. Please don\'t hesitate to reach out with any questions or suggestions about our theme system.'
          }
          {currentTheme === 'theme-3' && 
            'Let\'s chat! We love meeting new friends and hearing your amazing ideas! Drop us a line and let\'s make something awesome together! 🌟'
          }
        </p>
      </header>

      <div className={`grid gap-12 ${
        currentTheme === 'theme-2' ? 'md:grid-cols-5' : 'md:grid-cols-3'
      }`}>
        {/* Contact Form */}
        <div className={currentTheme === 'theme-2' ? 'md:col-span-3' : 'md:col-span-2'}>
          <Card className={`theme-transition ${getFormClasses()}`}>
            <CardHeader>
              <CardTitle className={`${
                currentTheme === 'theme-2' ? 'text-2xl' : 'text-xl'
              }`}>
                {currentTheme === 'theme-3' ? '💌 Send us a Message!' : 'Send us a Message'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={currentTheme === 'theme-3' ? 'Your awesome name! ✨' : 'Your name'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`theme-transition ${
                      currentTheme === 'theme-3' ? 'rounded-xl' : ''
                    }`}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={currentTheme === 'theme-3' ? 'your.email@awesome.com 📧' : 'your.email@example.com'}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`theme-transition ${
                      currentTheme === 'theme-3' ? 'rounded-xl' : ''
                    }`}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={
                      currentTheme === 'theme-3' 
                        ? 'Tell us your thoughts, ideas, or just say hi! We love hearing from you! 🎉'
                        : currentTheme === 'theme-2'
                        ? 'Please share your thoughts, questions, or feedback with us...'
                        : 'Your message...'
                    }
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={currentTheme === 'theme-2' ? 6 : 4}
                    className={`theme-transition resize-none ${
                      currentTheme === 'theme-3' ? 'rounded-xl' : ''
                    }`}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full theme-transition ${
                    currentTheme === 'theme-3' ? 'rounded-xl' : ''
                  }`}
                  size={currentTheme === 'theme-2' ? 'lg' : 'default'}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {currentTheme === 'theme-3' ? '🚀 Send Message!' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className={currentTheme === 'theme-2' ? 'md:col-span-2' : 'md:col-span-1'}>
          <div className="space-y-6">
            <Card className={`theme-transition ${
              currentTheme === 'theme-3' ? 'rounded-2xl gradient-theme3' : ''
            }`}>
              <CardHeader>
                <CardTitle className={`${
                  currentTheme === 'theme-2' ? 'text-2xl' : 'text-xl'
                }`}>
                  {currentTheme === 'theme-3' ? '📍 Find Us Here!' : 'Contact Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary mt-1">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {currentTheme === 'theme-3' && (
              <Card className="theme-transition rounded-2xl gradient-theme3">
                <CardHeader>
                  <CardTitle className="text-xl">🎨 Fun Fact!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Did you know? This contact form changes its personality with each theme! 
                    Try switching themes to see how design affects communication! ✨
                  </p>
                </CardContent>
              </Card>
            )}

            {currentTheme === 'theme-2' && (
              <Card className="theme-transition">
                <CardHeader>
                  <CardTitle className="text-xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;