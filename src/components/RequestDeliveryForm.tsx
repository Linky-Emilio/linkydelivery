
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
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { toast } from "sonner";

interface FormData {
  title: string;
  description: string;
  pickupLocation: string;
  dropoffLocation: string;
  price: number;
  timeframe: string;
  image: File | null;
}

const timeframeOptions = [
  '1 hour',
  '2 hours',
  '4 hours',
  'Today',
  'Tomorrow'
];

const RequestDeliveryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    pickupLocation: '',
    dropoffLocation: '',
    price: 15,
    timeframe: '4 hours',
    image: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, timeframe: value }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData(prev => ({ ...prev, price: value[0] }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({ ...prev, image: null }));
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // Log the data that would be sent to the server
      console.log('Submitting request:', formData);
      
      // Reset form and show success notification
      setFormData({
        title: '',
        description: '',
        pickupLocation: '',
        dropoffLocation: '',
        price: 15,
        timeframe: '4 hours',
        image: null
      });
      setPreviewUrl(null);
      setIsSubmitting(false);
      toast.success("Delivery request submitted successfully!");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Request a Delivery</CardTitle>
          <CardDescription>
            Fill in the details about your delivery request. Be specific about what needs to be picked up.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="e.g., Pick up my IKEA order"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe the items to be picked up and any special instructions"
              rows={3}
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickupLocation">Pickup Location</Label>
              <Input
                id="pickupLocation"
                name="pickupLocation"
                placeholder="Enter store or pickup address"
                value={formData.pickupLocation}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dropoffLocation">Dropoff Location</Label>
              <Input
                id="dropoffLocation"
                name="dropoffLocation"
                placeholder="Enter delivery address"
                value={formData.dropoffLocation}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="timeframe">Delivery Timeframe</Label>
                <Select 
                  value={formData.timeframe} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeframeOptions.map(option => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="price">You're willing to pay</Label>
                  <span className="font-medium text-linky-primary">
                    ${formData.price.toFixed(2)}
                  </span>
                </div>
                <Slider
                  id="price"
                  min={5}
                  max={50}
                  step={1}
                  value={[formData.price]}
                  onValueChange={handleSliderChange}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-linky-muted">
                  <span>$5</span>
                  <span>$50</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Product Image (Optional)</Label>
              <div className="mt-2 flex flex-col items-center justify-center border-2 border-dashed rounded-md p-4 bg-linky-background">
                {previewUrl ? (
                  <div className="relative w-full">
                    <img
                      src={previewUrl}
                      alt="Product preview"
                      className="h-32 mx-auto object-contain"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, image: null }));
                        setPreviewUrl(null);
                      }}
                    >
                      Remove Image
                    </Button>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center cursor-pointer h-32"
                    >
                      <div className="text-center">
                        <p className="text-sm text-linky-muted">
                          Drag and drop or click to upload
                        </p>
                        <p className="text-xs text-linky-muted mt-1">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    </label>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-linky-primary hover:bg-linky-primary/90"
          >
            {isSubmitting ? "Submitting..." : "Submit Delivery Request"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default RequestDeliveryForm;
