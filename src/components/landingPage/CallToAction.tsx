
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
