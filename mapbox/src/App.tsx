import { useState } from 'react';
import MapboxComponent from './components/Mapbox/Mapbox'
import Header from './components/Header/Header'
import './App.css'

function App() {
  const [lat, setLat] = useState<number | null >(null);
  const [lng, setLng] = useState<number | null >(null);
  const [zoom, setZoom] = useState<number>(10);
  const [geoError, setGeoError] = useState<string | null>(null);

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setGeoError(null);
      },
      (error) => {
        setGeoError(error.message);
      }
    );
  };

  return (
    <div>
      <Header/>
      <button onClick={handleClick}>Get Coordinates</button>
      {geoError ? (
        <p>Error: {geoError}</p>
      ) : (
        <p>Latitude: {lat}, Longitude: {lng}</p>
      )}
      <main>
      {lat && lng && <MapboxComponent lat={lat} lng={lng} zoom={zoom} setLat={setLat} setLng={setLng} setZoom={setZoom} />}
      </main>
    </div>
  )
}

export default App;