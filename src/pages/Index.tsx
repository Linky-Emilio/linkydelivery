
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, Truck, Star, Shield, Clock, DollarSign, MapPin, Phone } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import RouteMap from '@/components/RouteMap';

const Index = () => {
  // Datos de ejemplo para los puntos de recogida
  const examplePickupPoints = [
    { id: '1', location: 'Providencia', description: 'Paquete pequeño', price: 3500, deviationTime: 8 },
    { id: '2', location: 'Las Condes', description: 'Compras supermercado', price: 4200, deviationTime: 15 },
    { id: '3', location: 'Santiago Centro', description: 'Documentos urgentes', price: 2800, deviationTime: 5 },
    { id: '4', location: 'Ñuñoa', description: 'Comida rápida', price: 3000, deviationTime: 10 },
    { id: '5', location: 'Vitacura', description: 'Regalo', price: 3800, deviationTime: 12 },
    { id: '6', location: 'La Florida', description: 'Medicamentos', price: 3200, deviationTime: 18 },
    { id: '7', location: 'Maipú', description: 'Electrónica', price: 4500, deviationTime: 22 },
    { id: '8', location: 'Estación Central', description: 'Libros', price: 2500, deviationTime: 7 },
    { id: '9', location: 'Lo Barnechea', description: 'Ropa', price: 5000, deviationTime: 25 },
    { id: '10', location: 'La Reina', description: 'Artículos de oficina', price: 3100, deviationTime: 14 }
  ];

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
              {/* Nuevo diseño del iPhone moderno */}
              <div className="relative">
                {/* Marco del iPhone */}
                <div className="relative mx-auto w-[300px]">
                  <div className="relative z-10">
                    {/* Notch y bordes redondeados del iPhone */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-t-[40px] z-20 flex items-center justify-between px-6">
                      <div className="text-white text-xs">9:41</div>
                      <div className="w-16 h-6 bg-black absolute left-1/2 transform -translate-x-1/2 rounded-b-xl flex justify-center">
                        <div className="w-4 h-4 bg-black border-2 border-gray-800 rounded-full mt-1"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-6 text-white text-xs flex justify-end">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                          </svg>
                        </div>
                        <div className="w-6 text-white text-xs flex justify-end">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                        <div className="w-6 text-white text-xs flex justify-end">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4V5l8 4 8-4v2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenido principal de la app */}
                    <div className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-[40px] overflow-hidden shadow-2xl border-4 border-gray-800">
                      <div className="pt-8 px-3 pb-3">
                        {/* Cabecera */}
                        <div className="flex items-center mb-4 px-2">
                          <div className="bg-black/20 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                          </div>
                          <h2 className="text-xl font-semibold text-white text-center flex-1">Entregas Disponibles</h2>
                        </div>
                        
                        {/* Mapa con ubicaciones */}
                        <div className="h-40 bg-gray-800 rounded-xl overflow-hidden mb-4">
                          <RouteMap 
                            startPoint="Las Condes, Santiago" 
                            endPoint="Providencia, Santiago"
                            pickupPoints={examplePickupPoints}
                            className="w-full h-full"
                          />
                        </div>
                        
                        {/* Métricas */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="bg-black/20 rounded-lg p-3 text-white text-center">
                            <div className="text-2xl font-bold">+$24.900</div>
                            <div className="text-xs">ganancias totales</div>
                          </div>
                          <div className="bg-black/20 rounded-lg p-3 text-white text-center">
                            <div className="text-2xl font-bold">10</div>
                            <div className="text-xs">pedidos cercanos</div>
                          </div>
                        </div>
                        
                        {/* Lista de pedidos */}
                        <div className="text-white text-lg font-medium mb-2 px-1">
                          ¿Qué pedidos recogerás hoy?
                        </div>
                        <div className="bg-black/20 rounded-lg p-2 overflow-hidden">
                          <div className="space-y-2 max-h-36 overflow-y-auto pr-1 scrollbar-thin">
                            {examplePickupPoints.slice(0, 5).map((point, index) => (
                              <div key={point.id} className="bg-black/20 rounded-lg p-2 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <span className="bg-white text-purple-800 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
                                  <span className="text-sm">{point.description}</span>
                                </div>
                                <div className="flex flex-col items-end">
                                  <span className="text-green-300 font-semibold">+${point.price}</span>
                                  <span className="text-xs text-gray-300">{point.deviationTime} min</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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
