
import { Package, Star, Truck } from 'lucide-react';

const Features = () => {
  return (
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
  );
};

export default Features;
