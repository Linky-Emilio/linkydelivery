
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
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Route, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

export interface DeliveryRequest {
  id: string;
  title: string;
  description: string;
  pickupLocation: string;
  dropoffLocation: string;
  price: number;
  timeframe: string;
  distance: number;
  estimatedTime: number;
  status: 'pending' | 'accepted' | 'completed';
  createdAt: string;
}

interface DeliveryRequestCardProps {
  request: DeliveryRequest;
  onAccept?: (id: string) => void;
}

const DeliveryRequestCard = ({ request, onAccept }: DeliveryRequestCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAccept = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (onAccept) {
        onAccept(request.id);
      }
      toast.success("Delivery request accepted!");
      setIsLoading(false);
    }, 1000);
  };

  // Format timestamp to readable format
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  };

  return (
    <Card className="w-full hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{request.title}</CardTitle>
            <CardDescription className="line-clamp-2 mt-1">
              {request.description}
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-linky-background text-linky-primary">
            ${request.price.toFixed(2)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pb-3">
        <div className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-2 text-linky-muted" />
          <div className="flex items-center gap-2">
            <span className="text-linky-muted truncate max-w-[150px]">
              {request.pickupLocation}
            </span>
            <ArrowRight className="h-3 w-3 text-linky-muted" />
            <span className="truncate max-w-[150px]">
              {request.dropoffLocation}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-y-2">
          <div className="flex items-center text-sm mr-4">
            <Clock className="h-4 w-4 mr-2 text-linky-muted" />
            <span>{request.timeframe}</span>
          </div>
          <div className="flex items-center text-sm mr-4">
            <Route className="h-4 w-4 mr-2 text-linky-muted" />
            <span>+{request.distance} mi</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-linky-muted" />
            <span>+{request.estimatedTime} min</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <div className="text-xs text-linky-muted">
          Posted {formatTime(request.createdAt)}
        </div>
        <Button 
          onClick={handleAccept}
          disabled={isLoading || request.status !== 'pending'}
          size="sm"
          className="bg-linky-primary hover:bg-linky-primary/80"
        >
          {isLoading ? "Processing..." : "Accept Delivery"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DeliveryRequestCard;
