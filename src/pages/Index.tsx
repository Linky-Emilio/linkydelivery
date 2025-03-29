
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
            Conecta con repartidores ya en camino
          </h1>
          <p className="text-xl mb-10 text-linky-text/80 max-w-2xl mx-auto">
            Linky conecta a conductores con rutas diarias con usuarios que necesitan que sus pedidos sean recogidos y entregados a un precio justo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/request">
              <Button size="lg" className="bg-linky-primary hover:bg-linky-primary/90">
                <Package className="mr-2 h-5 w-5" />
                Solicitar una Entrega
              </Button>
            </Link>
            <Link to="/driver">
              <Button size="lg" variant="outline">
                <Truck className="mr-2 h-5 w-5" />
                Soy Repartidor
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona Linky</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-linky-primary/10 flex items-center justify-center mb-4">
                <Package className="h-8 w-8 text-linky-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Solicita una Entrega</h3>
              <p className="text-linky-muted">
                Indica qué necesitas recoger, dónde está y cuánto estás dispuesto a pagar.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-linky-primary/10 flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-linky-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Los Repartidores Recogen</h3>
              <p className="text-linky-muted">
                Los repartidores cercanos ven tu solicitud y pueden aceptarla si coincide con su ruta.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-linky-primary/10 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-linky-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recibe tus Artículos</h3>
              <p className="text-linky-muted">
                Recibe tu entrega en la ubicación preferida y califica tu experiencia.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Por qué elegir Linky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="flex items-start p-4">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-linky-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-linky-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horarios Personalizados</h3>
                <p className="text-linky-muted">
                  Tú decides cuándo necesitas tu entrega. No más esperas durante todo el día por tus paquetes.
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
                <h3 className="text-xl font-semibold mb-2">Precios Justos</h3>
                <p className="text-linky-muted">
                  Tú estableces tu precio, los repartidores eligen lo que les funciona. Sin cargos ocultos.
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
                <h3 className="text-xl font-semibold mb-2">Seguro y Confiable</h3>
                <p className="text-linky-muted">
                  Todos los repartidores están verificados y calificados. Rastrea tu entrega en tiempo real.
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
                <h3 className="text-xl font-semibold mb-2">Ecológico</h3>
                <p className="text-linky-muted">
                  Al utilizar repartidores que ya están en la carretera, reducimos las emisiones de carbono de las entregas dedicadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-linky-primary to-linky-secondary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">¿Listo para probar Linky?</h2>
          <p className="text-lg mb-8 opacity-90">
            Únete a miles de usuarios que ya están ahorrando tiempo y dinero con Linky.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/request">
              <Button size="lg" variant="secondary" className="bg-white text-linky-primary hover:bg-white/90">
                Solicita tu Primera Entrega
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
              © {new Date().getFullYear()} Linky. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
