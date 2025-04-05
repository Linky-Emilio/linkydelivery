
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, Truck, Star, Shield, Clock, DollarSign, MapPin, Phone } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
      
      {/* App Illustration Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">La Forma Más Inteligente de Entregar</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="bg-linky-background p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <MapPin className="mr-2 text-linky-primary" />
                    Rutas Optimizadas
                  </h3>
                  <p className="text-linky-muted">
                    Los repartidores reciben solicitudes que coinciden con su ruta actual, minimizando desvíos innecesarios.
                  </p>
                </div>
                
                <div className="bg-linky-background p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <DollarSign className="mr-2 text-linky-primary" />
                    Ganancias Transparentes
                  </h3>
                  <p className="text-linky-muted">
                    Los conductores ven claramente cuánto ganarán por cada entrega antes de aceptarla.
                  </p>
                </div>
                
                <div className="bg-linky-background p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <Clock className="mr-2 text-linky-primary" />
                    Control de Tiempo
                  </h3>
                  <p className="text-linky-muted">
                    Los usuarios eligen cuándo quieren recibir sus pedidos y los repartidores deciden cuándo realizar entregas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative max-w-xs mx-auto">
              <div className="relative">
                <div className="bg-purple-100 rounded-[50px] p-4">
                  <div className="bg-purple-500 rounded-[40px] overflow-hidden shadow-xl">
                    <div className="p-4 pt-8 pb-12 relative">
                      {/* Ruta y ubicaciones */}
                      <div className="h-64 relative mb-4">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-full h-full" viewBox="0 0 240 240">
                            <path
                              d="M40,60 C80,50 100,150 160,120 C220,90 200,160 180,180"
                              stroke="#2a1a5e"
                              strokeWidth="8"
                              fill="none"
                              strokeLinecap="round"
                            />
                            <circle cx="40" cy="60" r="15" fill="#f3e8ff" />
                            <text x="40" y="65" textAnchor="middle" fill="#6d28d9" fontWeight="bold">A</text>
                            <circle cx="90" cy="100" r="8" fill="#4c1d95" fillOpacity="0.6" />
                            <circle cx="140" cy="70" r="8" fill="#4c1d95" fillOpacity="0.6" />
                            <circle cx="100" cy="150" r="8" fill="#4c1d95" fillOpacity="0.6" />
                            <circle cx="180" cy="180" r="15" fill="#f3e8ff" />
                            <text x="180" y="185" textAnchor="middle" fill="#6d28d9" fontWeight="bold">B</text>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Métricas */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-purple-700 rounded-lg p-3 text-white text-center">
                          <div className="text-2xl font-bold">10 min</div>
                          <div className="text-sm">desvío</div>
                        </div>
                        <div className="bg-purple-600 rounded-lg p-3 text-white text-center">
                          <div className="text-2xl font-bold">54</div>
                          <div className="text-sm">ganancias</div>
                        </div>
                      </div>
                      
                      {/* Texto inferior */}
                      <div className="text-white text-lg font-medium text-center mb-2">
                        ¿Qué pedidos recogerás?
                      </div>
                      <div className="bg-purple-800 rounded-lg p-4 h-16 w-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Mano sosteniendo el teléfono */}
                <div className="absolute -bottom-5 -left-10 -right-10 h-24">
                  <img 
                    src="/lovable-uploads/a7885d26-a217-4907-9c76-2f08f5ae2241.png" 
                    alt="Mano sosteniendo teléfono" 
                    className="object-contain h-full w-full object-top"
                    style={{ filter: 'brightness(0.95) contrast(0.95)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4">
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
      <section className="py-16 px-4 bg-white">
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
