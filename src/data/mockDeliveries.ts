
import { DeliveryRequest } from '@/components/DeliveryRequestCard';

const generateRandomDate = (daysBack = 3) => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysBack));
  date.setHours(date.getHours() - Math.floor(Math.random() * 12));
  date.setMinutes(Math.floor(Math.random() * 60));
  return date.toISOString();
};

export const mockDeliveryRequests: DeliveryRequest[] = [
  {
    id: '1',
    title: 'IKEA Furniture Pickup',
    description: 'Need someone to pickup my furniture order from IKEA. Order #ABC123. It\'s a small desk and chair that should fit in most cars.',
    pickupLocation: 'IKEA Palo Alto',
    dropoffLocation: 'Main St, Cupertino',
    price: 25,
    timeframe: 'Today',
    distance: 3.2,
    estimatedTime: 15,
    status: 'pending',
    createdAt: generateRandomDate(1),
  },
  {
    id: '2',
    title: 'Laptop from Best Buy',
    description: 'Please pick up my new MacBook Pro from Best Buy. Order is paid for and ready for pickup under name: John Smith.',
    pickupLocation: 'Best Buy Mountain View',
    dropoffLocation: 'University Ave, Palo Alto',
    price: 20,
    timeframe: '4 hours',
    distance: 5.1,
    estimatedTime: 20,
    status: 'pending',
    createdAt: generateRandomDate(),
  },
  {
    id: '3',
    title: 'Grocery Pickup from Whole Foods',
    description: 'Grocery order with 3 bags. Already paid for online. Just show the app at customer service.',
    pickupLocation: 'Whole Foods Market',
    dropoffLocation: 'Oak St, San Francisco',
    price: 35,
    timeframe: '2 hours',
    distance: 1.8,
    estimatedTime: 10,
    status: 'pending',
    createdAt: generateRandomDate(),
  },
  {
    id: '4',
    title: 'Target Order',
    description: 'Small package from Target. Already paid for, just need pickup and delivery to my apartment.',
    pickupLocation: 'Target San Bruno',
    dropoffLocation: 'Maple St, San Mateo',
    price: 18,
    timeframe: 'Tomorrow',
    distance: 4.2,
    estimatedTime: 18,
    status: 'pending',
    createdAt: generateRandomDate(2),
  },
  {
    id: '5',
    title: 'Apple Store Pickup',
    description: 'New iPhone that I purchased online. Pickup under name Michael Johnson.',
    pickupLocation: 'Apple Park Visitor Center',
    dropoffLocation: 'Central Expressway, Santa Clara',
    price: 30,
    timeframe: '1 hour',
    distance: 3.5,
    estimatedTime: 12,
    status: 'pending',
    createdAt: generateRandomDate(),
  },
  {
    id: '6',
    title: 'Home Depot Order',
    description: 'Small box of tools and materials. Should fit in any car, not too heavy.',
    pickupLocation: 'Home Depot East Palo Alto',
    dropoffLocation: 'Cedar St, Redwood City',
    price: 22,
    timeframe: '4 hours',
    distance: 6.3,
    estimatedTime: 25,
    status: 'pending',
    createdAt: generateRandomDate(),
  },
];
