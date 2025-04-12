
import { Clock, DollarSign, MapPin } from 'lucide-react';
import PhoneIllustration from './PhoneIllustration';

interface AppIllustrationProps {
  pickupPoints: Array<{
    id: string;
    location: string;
    description: string;
    price: number;
    deviationTime: number;
  }>;
}

const AppIllustration = ({ pickupPoints }: AppIllustrationProps) => {
  return (
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
          
          <div className="order-1 lg:order-2">
            <PhoneIllustration pickupPoints={pickupPoints} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIllustration;
