// MapboxComponent.tsx
import  { useEffect, useRef } from 'react';
import mapboxgl, { Map as MapGl } from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string;

interface MapboxProps {
  lat: number;
  lng: number;
  zoom: number;
  setLat: (lat: number) => void;
  setLng: (lng: number) => void;
  setZoom: (zoom: number) => void;
}

function MapboxComponent({ lat, lng, zoom, setLat, setLng, setZoom }: MapboxProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapGl | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;

    mapRef.current = new MapGl({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    const map: MapGl = mapRef.current;

    if (markerRef.current) {
      markerRef.current.remove();
    }

    markerRef.current = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

    map.on('move', () => {
      const position = map.getCenter();
      setLat(Number(position.lat.toFixed(4)));
      setLng(Number(position.lng.toFixed(4)));
      setZoom(map.getZoom());
    });
  }, [lat, lng, zoom, setLat, setLng, setZoom]);

  return (
    <div>
      <div ref={mapContainer} style={{ height: '500px' }} className='map-container'></div>
      <p>Center position: {lat} lat, {lng} long:</p>
    </div>
  );
}

export default MapboxComponent;
