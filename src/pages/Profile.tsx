
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
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(123) 456-7890',
    address: '123 Main St, San Francisco, CA',
    avatar: '',
  });

  const handleSaveProfile = () => {
    // Simulate API call with a timeout
    setTimeout(() => {
      setIsEditing(false);
      toast.success("Profile updated successfully!");
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
      title: 'IKEA Package',
      date: '2023-08-15',
      status: 'completed',
      price: 22.50,
      rating: 5,
    },
    {
      id: '456',
      title: 'Grocery Delivery',
      date: '2023-08-10',
      status: 'completed',
      price: 18.75,
      rating: 4,
    },
    {
      id: '789',
      title: 'Electronic Store Pickup',
      date: '2023-08-05',
      status: 'cancelled',
      price: 25.00,
      rating: null,
    },
  ];

  // Mock driver history data
  const driverDeliveries = [
    {
      id: 'd123',
      title: 'Apple Store Pickup',
      date: '2023-08-12',
      status: 'completed',
      earnings: 28.50,
      customerRating: 5,
    },
    {
      id: 'd456',
      title: 'Home Depot Order',
      date: '2023-08-08',
      status: 'completed',
      earnings: 15.25,
      customerRating: 4,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
          <p className="text-linky-muted">
            Manage your account and view your delivery history.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="h-4 w-4" /> Account
            </TabsTrigger>
            <TabsTrigger value="customer" className="flex items-center gap-2">
              <Package className="h-4 w-4" /> As Customer
            </TabsTrigger>
            <TabsTrigger value="driver" className="flex items-center gap-2">
              <Truck className="h-4 w-4" /> As Driver
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
                      <CardDescription>Member since August 2023</CardDescription>
                    </div>
                  </div>
                  <Button 
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
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
                    <Label htmlFor="email">Email</Label>
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
                    <Label htmlFor="phone">Phone Number</Label>
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
                    <Label htmlFor="address">Address</Label>
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
                <CardTitle>Delivery History</CardTitle>
                <CardDescription>
                  View all your past delivery requests and their status.
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
                              {delivery.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
                          <div className="text-right">
                            <div className="font-medium">${delivery.price.toFixed(2)}</div>
                            <div className="text-sm text-linky-muted">Paid</div>
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
                    You haven't requested any deliveries yet.
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
                    <CardTitle>Driver Dashboard</CardTitle>
                    <CardDescription>
                      View your delivery history as a driver.
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 bg-linky-primary/10 p-2 rounded-md">
                    <span className="text-sm font-medium">Driver Rating:</span>
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
                    <h3 className="font-semibold">Earnings Overview</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Card className="bg-linky-primary/10">
                      <CardContent className="p-4">
                        <div className="text-sm text-linky-muted">This Week</div>
                        <div className="text-2xl font-bold mt-1">$43.75</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-linky-primary/10">
                      <CardContent className="p-4">
                        <div className="text-sm text-linky-muted">This Month</div>
                        <div className="text-2xl font-bold mt-1">$187.25</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-linky-primary/10 col-span-2 md:col-span-1">
                      <CardContent className="p-4">
                        <div className="text-sm text-linky-muted">All Time</div>
                        <div className="text-2xl font-bold mt-1">$523.50</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Recent Deliveries</h3>
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
                                {delivery.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
                            <div className="text-right">
                              <div className="font-medium text-linky-success">
                                +${delivery.earnings.toFixed(2)}
                              </div>
                              <div className="text-sm text-linky-muted">Earned</div>
                            </div>
                            {delivery.status === 'completed' && (
                              <div className="flex items-center">
                                <span className="text-sm mr-1">Rating:</span>
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
                      You haven't completed any deliveries as a driver yet.
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
                  Go to Driver Dashboard
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
