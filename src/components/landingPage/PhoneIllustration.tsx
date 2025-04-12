
import RouteMap from '@/components/RouteMap';

interface PhoneIllustrationProps {
  pickupPoints: Array<{
    id: string;
    location: string;
    description: string;
    price: number;
    deviationTime: number;
  }>;
}

const PhoneIllustration = ({ pickupPoints }: PhoneIllustrationProps) => {
  return (
    <div className="relative max-w-xs mx-auto">
      {/* Nuevo diseño del iPhone moderno */}
      <div className="relative">
        {/* Marco del iPhone */}
        <div className="relative mx-auto w-[300px]">
          <div className="relative z-10">
            {/* Notch y bordes redondeados del iPhone */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-t-[40px] z-20 flex items-center justify-between px-6">
              <div className="text-white text-xs">9:41</div>
              <div className="w-16 h-6 bg-black absolute left-1/2 transform -translate-x-1/2 rounded-b-xl flex justify-center">
                <div className="w-4 h-4 bg-black border-2 border-gray-800 rounded-full mt-1"></div>
              </div>
              <div className="flex space-x-1">
                <div className="w-6 text-white text-xs flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="w-6 text-white text-xs flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div className="w-6 text-white text-xs flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4V5l8 4 8-4v2z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Contenido principal de la app */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-[40px] overflow-hidden shadow-2xl border-4 border-gray-800">
              <div className="pt-8 px-3 pb-3">
                {/* Cabecera */}
                <div className="flex items-center mb-4 px-2">
                  <div className="bg-black/20 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-white text-center flex-1">Entregas Disponibles</h2>
                </div>
                
                {/* Mapa con ubicaciones */}
                <div className="h-40 bg-gray-800 rounded-xl overflow-hidden mb-4">
                  <RouteMap 
                    startPoint="Las Condes, Santiago" 
                    endPoint="Providencia, Santiago"
                    pickupPoints={pickupPoints}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Métricas */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-black/20 rounded-lg p-3 text-white text-center">
                    <div className="text-2xl font-bold">+$24.900</div>
                    <div className="text-xs">ganancias totales</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3 text-white text-center">
                    <div className="text-2xl font-bold">10</div>
                    <div className="text-xs">pedidos cercanos</div>
                  </div>
                </div>
                
                {/* Lista de pedidos */}
                <div className="text-white text-lg font-medium mb-2 px-1">
                  ¿Qué pedidos recogerás hoy?
                </div>
                <div className="bg-black/20 rounded-lg p-2 overflow-hidden">
                  <div className="space-y-2 max-h-36 overflow-y-auto pr-1 scrollbar-thin">
                    {pickupPoints.slice(0, 5).map((point, index) => (
                      <div key={point.id} className="bg-black/20 rounded-lg p-2 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="bg-white text-purple-800 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
                          <span className="text-sm">{point.description}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-green-300 font-semibold">+${point.price}</span>
                          <span className="text-xs text-gray-300">{point.deviationTime} min</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mano sosteniendo el teléfono */}
        <div className="absolute -bottom-5 -left-10 -right-10 h-24">
          <img 
            src="/lovable-uploads/a7885d26-a217-4907-9c76-2f08f5ae2241.png" 
            alt="Mano sosteniendo teléfono" 
            className="object-contain h-full w-full object-top"
            style={{ filter: 'brightness(0.95) contrast(0.95)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneIllustration;
