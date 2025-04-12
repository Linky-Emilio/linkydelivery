
import { Clock, DollarSign, Shield, Truck } from 'lucide-react';

const Benefits = () => {
  return (
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
  );
};

export default Benefits;
