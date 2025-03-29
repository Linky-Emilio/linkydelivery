
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
          <h1 className="text-3xl font-bold mb-2">Request a Delivery</h1>
          <p className="text-linky-muted">
            Fill out the form below to create a new delivery request. Nearby drivers will be able to see and accept your request.
          </p>
        </div>
        
        <RequestDeliveryForm />
      </div>
    </div>
  );
};

export default RequestDelivery;
