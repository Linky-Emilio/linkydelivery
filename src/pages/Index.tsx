
import Hero from '@/components/landingPage/Hero';
import AppIllustration from '@/components/landingPage/AppIllustration';
import Features from '@/components/landingPage/Features';
import Benefits from '@/components/landingPage/Benefits';
import CallToAction from '@/components/landingPage/CallToAction';
import Footer from '@/components/landingPage/Footer';

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
      <Hero />
      <AppIllustration pickupPoints={examplePickupPoints} />
      <Features />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
