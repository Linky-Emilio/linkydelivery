
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

const timeframeOptions = ['1 hora', '2 horas', '4 horas', 'Hoy', 'Mañana'];

const RequestDeliveryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    pickupLocation: '',
    dropoffLocation: '',
    price: 15,
    timeframe: '4 horas',
    image: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      timeframe: value
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData(prev => ({
      ...prev,
      price: value[0]
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({
        ...prev,
        image: null
      }));
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      // Log the data that would be sent to the server
      console.log('Enviando solicitud:', formData);

      // Reset form and show success notification
      setFormData({
        title: '',
        description: '',
        pickupLocation: '',
        dropoffLocation: '',
        price: 15,
        timeframe: '4 horas',
        image: null
      });
      setPreviewUrl(null);
      setIsSubmitting(false);
      toast.success("¡Solicitud de entrega enviada con éxito!");
    }, 1500);
  };

  return <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Solicita una entrega</CardTitle>
          <CardDescription>Rellena los detalles de tu solicitud de entrega. Sé específico sobre lo que se debe recoger.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input id="title" name="title" placeholder="ej., Recoger mi pedido de IKEA" value={formData.title} onChange={handleInputChange} required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea id="description" name="description" placeholder="Describe los artículos a recoger y cualquier instrucción especial" rows={3} value={formData.description} onChange={handleInputChange} required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickupLocation">Lugar de recogida</Label>
              <Input id="pickupLocation" name="pickupLocation" placeholder="Ingresa la tienda o dirección de recogida" value={formData.pickupLocation} onChange={handleInputChange} required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dropoffLocation">Lugar de entrega</Label>
              <Input id="dropoffLocation" name="dropoffLocation" placeholder="Ingresa la dirección de entrega" value={formData.dropoffLocation} onChange={handleInputChange} required />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="timeframe">Plazo de entrega</Label>
                <Select value={formData.timeframe} onValueChange={handleSelectChange}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecciona un plazo" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeframeOptions.map(option => <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="price">Estás dispuesto a pagar</Label>
                  <span className="font-medium text-purple-600">
                    ${formData.price.toFixed(2)}
                  </span>
                </div>
                <Slider id="price" min={5} max={50} step={1} value={[formData.price]} onValueChange={handleSliderChange} className="py-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$5</span>
                  <span>$50</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Imagen del producto (Opcional)</Label>
              <div className="mt-2 flex flex-col items-center justify-center border-2 border-dashed rounded-md p-4 bg-gray-50">
                {previewUrl ? <div className="relative w-full">
                    <img src={previewUrl} alt="Vista previa del producto" className="h-32 mx-auto object-contain" />
                    <Button type="button" variant="outline" size="sm" className="mt-2 w-full" onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    image: null
                  }));
                  setPreviewUrl(null);
                }}>
                      Eliminar imagen
                    </Button>
                  </div> : <>
                    <label htmlFor="image-upload" className="flex flex-col items-center justify-center cursor-pointer h-32">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">
                          Arrastra y suelta o haz clic para subir
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG hasta 5MB
                        </p>
                      </div>
                    </label>
                    <Input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                  </>}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-purple-600 hover:bg-purple-700">
            {isSubmitting ? "Enviando..." : "Enviar solicitud de entrega"}
          </Button>
        </CardFooter>
      </Card>
    </form>;
};

export default RequestDeliveryForm;
