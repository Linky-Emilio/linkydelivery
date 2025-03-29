
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface RouteMapProps {
  startPoint: string;
  endPoint: string;
  className?: string;
}

const RouteMap = ({ startPoint, endPoint, className = '' }: RouteMapProps) => {
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
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.1332, 19.4326], // Centro en CDMX por defecto
      zoom: 10
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
