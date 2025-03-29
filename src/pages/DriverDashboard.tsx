
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Route, MapPin } from 'lucide-react';
import DeliveryRequestCard, { DeliveryRequest } from '@/components/DeliveryRequestCard';
import { mockDeliveryRequests } from '@/data/mockDeliveries';
import RouteMap from '@/components/RouteMap';

const DriverDashboard = () => {
  const [deliveries, setDeliveries] = useState<DeliveryRequest[]>([]);
  const [filteredDeliveries, setFilteredDeliveries] = useState<DeliveryRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTimeframe, setFilterTimeframe] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [route, setRoute] = useState({
    start: 'Ciudad de México, CDMX',
    end: 'Cuernavaca, Morelos'
  });

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setDeliveries(mockDeliveryRequests);
      setFilteredDeliveries(mockDeliveryRequests);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    filterDeliveries();
  }, [searchTerm, filterTimeframe, deliveries]);

  const filterDeliveries = () => {
    let filtered = [...deliveries];
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        delivery =>
          delivery.title.toLowerCase().includes(term) ||
          delivery.description.toLowerCase().includes(term) ||
          delivery.pickupLocation.toLowerCase().includes(term) ||
          delivery.dropoffLocation.toLowerCase().includes(term)
      );
    }
    
    // Filter by timeframe
    if (filterTimeframe !== 'all') {
      filtered = filtered.filter(
        delivery => delivery.timeframe === filterTimeframe
      );
    }
    
    setFilteredDeliveries(filtered);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTimeframeChange = (value: string) => {
    setFilterTimeframe(value);
  };

  const handleAcceptDelivery = (id: string) => {
    // In a real app, this would call an API to accept the delivery
    console.log(`Aceptando entrega con id: ${id}`);
    
    // Update local state to reflect the change
    const updatedDeliveries = deliveries.map(delivery => 
      delivery.id === id 
        ? { ...delivery, status: 'accepted' as const } 
        : delivery
    );
    
    setDeliveries(updatedDeliveries);
  };

  const updateRoute = () => {
    setShowMap(true);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Panel de Repartidor</h1>
        <p className="text-linky-muted">
          Encuentra solicitudes de entrega en tu ruta y gana dinero extra.
        </p>
      </div>
      
      {/* Current Route Display */}
      <div className="bg-white rounded-lg p-4 shadow-sm border mb-6">
        <div className="flex items-center mb-2">
          <Route className="h-5 w-5 mr-2 text-linky-primary" />
          <h2 className="text-lg font-semibold">Tu Ruta Actual</h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
          <div className="flex items-center flex-grow">
            <MapPin className="h-4 w-4 text-linky-muted mr-2" />
            <Input 
              value={route.start}
              onChange={(e) => setRoute({...route, start: e.target.value})}
              placeholder="Punto de partida"
              className="max-w-xs"
            />
          </div>
          <div className="hidden sm:block">a</div>
          <div className="flex items-center flex-grow">
            <MapPin className="h-4 w-4 text-linky-muted mr-2" />
            <Input 
              value={route.end}
              onChange={(e) => setRoute({...route, end: e.target.value})}
              placeholder="Destino"
              className="max-w-xs"
            />
          </div>
          <Button 
            className="bg-linky-primary hover:bg-linky-primary/90"
            onClick={updateRoute}
          >
            Actualizar Ruta
          </Button>
        </div>

        {/* Map Component */}
        {showMap && (
          <div className="mt-4">
            <RouteMap 
              startPoint={route.start} 
              endPoint={route.end} 
              className="h-64 w-full mt-2" 
            />
          </div>
        )}
      </div>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-linky-muted" />
          <Input
            placeholder="Buscar entregas..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>
        <div className="w-full md:w-64">
          <Select value={filterTimeframe} onValueChange={handleTimeframeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por tiempo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los tiempos</SelectItem>
              <SelectItem value="1 hour">1 Hora</SelectItem>
              <SelectItem value="2 hours">2 Horas</SelectItem>
              <SelectItem value="4 hours">4 Horas</SelectItem>
              <SelectItem value="Today">Hoy</SelectItem>
              <SelectItem value="Tomorrow">Mañana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-4 flex items-center">
        <Badge variant="outline" className="mr-2">
          {filteredDeliveries.length} resultado{filteredDeliveries.length !== 1 ? 's' : ''}
        </Badge>
        <span className="text-sm text-linky-muted">
          Entregas cerca de tu ruta
        </span>
      </div>
      
      {/* Delivery List */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 h-64 animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2 mt-auto ml-auto"></div>
            </div>
          ))}
        </div>
      ) : filteredDeliveries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDeliveries.map(delivery => (
            <DeliveryRequestCard
              key={delivery.id}
              request={delivery}
              onAccept={handleAcceptDelivery}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg bg-white">
          <div className="text-linky-muted mb-2">
            No se encontraron solicitudes de entrega.
          </div>
          <p className="text-sm">
            Intenta cambiar tus criterios de búsqueda o filtros.
          </p>
        </div>
      )}
    </div>
  );
};

export default DriverDashboard;
