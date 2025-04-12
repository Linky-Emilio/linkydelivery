
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, Truck } from 'lucide-react';

const Hero = () => {
  return (
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
  );
};

export default Hero;
