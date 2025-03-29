
import { useEffect } from 'react';
import RequestDeliveryForm from '@/components/RequestDeliveryForm';

const RequestDelivery = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Solicitar una Entrega</h1>
          <p className="text-gray-500">
            Completa el formulario a continuación para crear una nueva solicitud de entrega. Los repartidores cercanos podrán ver y aceptar tu solicitud.
          </p>
        </div>
        
        <RequestDeliveryForm />
      </div>
    </div>
  );
};

export default RequestDelivery;
