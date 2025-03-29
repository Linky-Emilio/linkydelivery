
import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";
import { User, Star, Clock, Package, Truck, MapPin, Phone, Mail } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@ejemplo.com',
    phone: '(123) 456-7890',
    address: 'Calle Principal 123, Ciudad de México',
    avatar: '',
  });

  const handleSaveProfile = () => {
    // Simulate API call with a timeout
    setTimeout(() => {
      setIsEditing(false);
      toast.success("¡Perfil actualizado correctamente!");
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  // Mock delivery history data
  const deliveries = [
    {
      id: '123',
      title: 'Paquete de IKEA',
      date: '2023-08-15',
      status: 'completed',
      price: 450.00,
      rating: 5,
    },
    {
      id: '456',
      title: 'Entrega de Supermercado',
      date: '2023-08-10',
      status: 'completed',
      price: 350.50,
      rating: 4,
    },
    {
      id: '789',
      title: 'Recogida en Tienda Electrónica',
      date: '2023-08-05',
      status: 'cancelled',
      price: 500.00,
      rating: null,
    },
  ];

  // Mock driver history data
  const driverDeliveries = [
    {
      id: 'd123',
      title: 'Recogida en Apple Store',
      date: '2023-08-12',
      status: 'completed',
      earnings: 580.50,
      customerRating: 5,
    },
    {
      id: 'd456',
      title: 'Pedido de Home Depot',
      date: '2023-08-08',
      status: 'completed',
      earnings: 320.25,
      customerRating: 4,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Tu Perfil</h1>
          <p className="text-linky-muted">
            Administra tu cuenta y visualiza tu historial de entregas.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="h-4 w-4" /> Cuenta
            </TabsTrigger>
            <TabsTrigger value="customer" className="flex items-center gap-2">
              <Package className="h-4 w-4" /> Como Cliente
            </TabsTrigger>
            <TabsTrigger value="driver" className="flex items-center gap-2">
              <Truck className="h-4 w-4" /> Como Repartidor
            </TabsTrigger>
          </TabsList>
          
          {/* Account Tab */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={userData.avatar} />
                      <AvatarFallback className="text-xl bg-linky-primary text-white">
                        {userData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{userData.name}</CardTitle>
                      <CardDescription>Miembro desde agosto 2023</CardDescription>
                    </div>
                  </div>
                  <Button 
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  >
                    {isEditing ? "Guardar Cambios" : "Editar Perfil"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <div className="flex items-center h-10 px-3 rounded-md border bg-background">
                        {userData.name}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <div className="flex items-center">
                      {isEditing ? (
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={userData.email}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <div className="flex items-center h-10 px-3 rounded-md border bg-background w-full">
                          <Mail className="h-4 w-4 mr-2 text-linky-muted" />
                          {userData.email}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Número de Teléfono</Label>
                    <div className="flex items-center">
                      {isEditing ? (
                        <Input
                          id="phone"
                          name="phone"
                          value={userData.phone}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <div className="flex items-center h-10 px-3 rounded-md border bg-background w-full">
                          <Phone className="h-4 w-4 mr-2 text-linky-muted" />
                          {userData.phone}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <div className="flex items-center">
                      {isEditing ? (
                        <Input
                          id="address"
                          name="address"
                          value={userData.address}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <div className="flex items-center h-10 px-3 rounded-md border bg-background w-full">
                          <MapPin className="h-4 w-4 mr-2 text-linky-muted" />
                          {userData.address}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Customer Tab */}
          <TabsContent value="customer">
            <Card>
              <CardHeader>
                <CardTitle>Historial de Entregas</CardTitle>
                <CardDescription>
                  Visualiza todas tus solicitudes de entrega pasadas y su estado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {deliveries.length > 0 ? (
                  <div className="space-y-4">
                    {deliveries.map((delivery) => (
                      <div 
                        key={delivery.id}
                        className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                      >
                        <div>
                          <div className="font-medium">{delivery.title}</div>
                          <div className="flex items-center gap-4 mt-1 text-sm">
                            <div className="flex items-center text-linky-muted">
                              <Clock className="h-4 w-4 mr-1" />
                              {new Date(delivery.date).toLocaleDateString()}
                            </div>
                            <Badge 
                              variant={delivery.status === 'completed' ? 'default' : 'destructive'}
                              className={
                                delivery.status === 'completed' 
                                  ? 'bg-linky-success' 
                                  : undefined
                              }
                            >
                              {delivery.status === 'completed' ? 'Completado' : 'Cancelado'}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
                          <div className="text-right">
                            <div className="font-medium">${delivery.price.toFixed(2)} MXN</div>
                            <div className="text-sm text-linky-muted">Pagado</div>
                          </div>
                          {delivery.status === 'completed' && (
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < (delivery.rating || 0) 
                                      ? 'text-yellow-400 fill-yellow-400' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-linky-muted">
                    Aún no has solicitado ninguna entrega.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Driver Tab */}
          <TabsContent value="driver">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Panel de Repartidor</CardTitle>
                    <CardDescription>
                      Visualiza tu historial de entregas como repartidor.
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 bg-linky-primary/10 p-2 rounded-md">
                    <span className="text-sm font-medium">Calificación:</span>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${
                            i < 4.5
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm font-bold">4.5</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Resumen de Ganancias</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Card className="bg-linky-primary/10">
                      <CardContent className="p-4">
                        <div className="text-sm text-linky-muted">Esta Semana</div>
                        <div className="text-2xl font-bold mt-1">$875.50 MXN</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-linky-primary/10">
                      <CardContent className="p-4">
                        <div className="text-sm text-linky-muted">Este Mes</div>
                        <div className="text-2xl font-bold mt-1">$3,745.00 MXN</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-linky-primary/10 col-span-2 md:col-span-1">
                      <CardContent className="p-4">
                        <div className="text-sm text-linky-muted">Total</div>
                        <div className="text-2xl font-bold mt-1">$10,470.00 MXN</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Entregas Recientes</h3>
                  {driverDeliveries.length > 0 ? (
                    <div className="space-y-4">
                      {driverDeliveries.map((delivery) => (
                        <div 
                          key={delivery.id}
                          className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                        >
                          <div>
                            <div className="font-medium">{delivery.title}</div>
                            <div className="flex items-center gap-4 mt-1 text-sm">
                              <div className="flex items-center text-linky-muted">
                                <Clock className="h-4 w-4 mr-1" />
                                {new Date(delivery.date).toLocaleDateString()}
                              </div>
                              <Badge 
                                variant={delivery.status === 'completed' ? 'default' : 'destructive'}
                                className={
                                  delivery.status === 'completed' 
                                    ? 'bg-linky-success' 
                                    : undefined
                                }
                              >
                                {delivery.status === 'completed' ? 'Completado' : 'Cancelado'}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
                            <div className="text-right">
                              <div className="font-medium text-linky-success">
                                +${delivery.earnings.toFixed(2)} MXN
                              </div>
                              <div className="text-sm text-linky-muted">Ganado</div>
                            </div>
                            {delivery.status === 'completed' && (
                              <div className="flex items-center">
                                <span className="text-sm mr-1">Calificación:</span>
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star 
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < (delivery.customerRating || 0) 
                                        ? 'text-yellow-400 fill-yellow-400' 
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-linky-muted">
                      Aún no has completado ninguna entrega como repartidor.
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => window.location.href = '/driver'}
                >
                  Ir al Panel de Repartidor
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
