
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, Truck, Star, Shield, Clock, DollarSign } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-linky-background">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-linky-primary to-linky-secondary bg-clip-text text-transparent">
            Connect with drivers already on the road
          </h1>
          <p className="text-xl mb-10 text-linky-text/80 max-w-2xl mx-auto">
            Linky connects drivers with daily routes to users who need their orders picked up and delivered at a fair price.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/request">
              <Button size="lg" className="bg-linky-primary hover:bg-linky-primary/90">
                <Package className="mr-2 h-5 w-5" />
                Request a Delivery
              </Button>
            </Link>
            <Link to="/driver">
              <Button size="lg" variant="outline">
                <Truck className="mr-2 h-5 w-5" />
                I'm a Driver
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Linky Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-linky-primary/10 flex items-center justify-center mb-4">
                <Package className="h-8 w-8 text-linky-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Request a Delivery</h3>
              <p className="text-linky-muted">
                Set what you need picked up, where it is, and how much you're willing to pay.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-linky-primary/10 flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-linky-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Drivers Pick Up</h3>
              <p className="text-linky-muted">
                Nearby drivers see your request and can accept it if it matches their route.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-linky-primary/10 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-linky-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Your Items</h3>
              <p className="text-linky-muted">
                Get your delivery at your preferred location and rate your experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Linky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="flex items-start p-4">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-linky-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-linky-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Custom Timeframes</h3>
                <p className="text-linky-muted">
                  You decide when you need your delivery. No more waiting all day for packages.
                </p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex items-start p-4">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-linky-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-linky-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
                <p className="text-linky-muted">
                  You set your price, drivers choose what works for them. No hidden fees.
                </p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex items-start p-4">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-linky-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-linky-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-linky-muted">
                  All drivers are verified and rated. Track your delivery in real-time.
                </p>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex items-start p-4">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-linky-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-linky-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-linky-muted">
                  By using drivers already on the road, we reduce carbon emissions from dedicated deliveries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-linky-primary to-linky-secondary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to try Linky?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of users who are already saving time and money with Linky.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/request">
              <Button size="lg" variant="secondary" className="bg-white text-linky-primary hover:bg-white/90">
                Request Your First Delivery
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold bg-gradient-to-r from-linky-primary to-linky-secondary bg-clip-text text-transparent">
                Linky
              </div>
            </div>
            <div className="text-sm text-linky-muted">
              © {new Date().getFullYear()} Linky. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
