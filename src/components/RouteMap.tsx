
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface RouteMapProps {
  startPoint: string;
  endPoint: string;
  className?: string;
  pickupPoints?: Array<{
    id: string;
    location: string;
    description: string;
    price: number;
    deviationTime: number;
  }>;
}

const RouteMap = ({ 
  startPoint, 
  endPoint, 
  className = '', 
  pickupPoints = []
}: RouteMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  
  // Para MVP, usamos un token temporal que debe ser reemplazado en producción
  useEffect(() => {
    // Esta es una solución temporal para el MVP
    // En producción, esto debería obtenerse desde variables de entorno o backend
    const storedToken = localStorage.getItem('mapbox_token');
    if (storedToken) {
      setMapboxToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

    // Inicializar el mapa
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11', // Cambiamos a estilo oscuro para que combine con el diseño
      center: [-70.6693, -33.4489], // Centro en Santiago de Chile
      zoom: 12
    });

    // Agregar controles de navegación
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Cleanup al desmontar
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken]);

  // Efecto para agregar marcadores de los puntos de recogida
  useEffect(() => {
    if (!map.current || !mapboxToken || pickupPoints.length === 0) return;

    // Coordenadas simuladas para Santiago de Chile
    const santiagoCoordinates = [
      [-70.6693, -33.4489], // Centro
      [-70.6593, -33.4389], // Providencia
      [-70.6793, -33.4389], // Santiago Centro
      [-70.6893, -33.4289], // Las Condes
      [-70.6493, -33.4589], // Ñuñoa
      [-70.6993, -33.4689], // Estación Central
      [-70.6293, -33.4489], // La Reina
      [-70.7093, -33.4189], // Vitacura
      [-70.6193, -33.4789], // Macul
      [-70.7193, -33.4589]  // Lo Prado
    ];

    // Limpiamos marcadores anteriores
    const existingMarkers = document.querySelectorAll('.pickup-marker');
    existingMarkers.forEach(marker => marker.remove());

    // Agregamos muchos más marcadores para mostrar pedidos disponibles
    const totalMarkers = Math.min(santiagoCoordinates.length, pickupPoints.length);
    
    for (let i = 0; i < totalMarkers; i++) {
      // Creamos el elemento del marcador
      const el = document.createElement('div');
      el.className = 'pickup-marker';
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = '#8b5cf6';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.style.color = 'white';
      el.style.fontWeight = 'bold';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
      el.style.cursor = 'pointer';
      el.innerHTML = (i + 1).toString();

      const point = pickupPoints[i];

      // Información del popup con precio destacado
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-2">
          <div class="font-bold">${point.description}</div>
          <div class="text-green-600 text-lg font-bold">+$${point.price}</div>
          <div class="text-sm">${point.deviationTime} min de desvío</div>
        </div>
      `);

      // Agregamos el marcador al mapa con las coordenadas correctas
      const coordinates = santiagoCoordinates[i];
      new mapboxgl.Marker(el)
        .setLngLat([coordinates[0], coordinates[1]]) // Corregido: Pasamos un array de dos elementos
        .setPopup(popup)
        .addTo(map.current!);
    }

    // Ajustamos el zoom para ver todos los marcadores
    if (totalMarkers > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      // Extender los límites con cada punto de coordenada
      for (let i = 0; i < totalMarkers; i++) {
        bounds.extend([santiagoCoordinates[i][0], santiagoCoordinates[i][1]]); // Corregido: Pasamos un array de dos elementos
      }
      
      map.current.fitBounds(bounds, {
        padding: 50,
        maxZoom: 14
      });
    }
  }, [pickupPoints, mapboxToken]);

  return (
    <div className={`relative ${className}`}>
      {!mapboxToken && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 z-10">
          <p className="text-gray-600 mb-2 text-center">
            Para visualizar el mapa, por favor introduce tu token de Mapbox:
          </p>
          <input
            type="text"
            className="w-full p-2 border rounded mb-2"
            placeholder="Introduce tu token de Mapbox"
            onChange={(e) => {
              const token = e.target.value.trim();
              if (token) {
                localStorage.setItem('mapbox_token', token);
                setMapboxToken(token);
              }
            }}
          />
          <p className="text-xs text-gray-500 text-center">
            Obtén tu token en <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-linky-primary">mapbox.com</a>
          </p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-full rounded-lg"></div>
    </div>
  );
};

export default RouteMap;
