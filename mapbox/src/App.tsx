import { useState } from 'react';
import MapboxComponent from './components/Mapbox/Mapbox'
import Header from './components/Header/Header'
import Landing from './views/Landing'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  const [lat, setLat] = useState<number | null >(null);
  const [lng, setLng] = useState<number | null >(null);
  const [zoom, setZoom] = useState<number>(10);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    }
  ]);
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
      <div className="App">
        <Header/>
          <RouterProvider router={ router } />
            <main>
              {lat && lng && <MapboxComponent lat={lat} lng={lng} zoom={zoom} setLat={setLat} setLng={setLng} setZoom={setZoom} />}
            </main>
            <button onClick={handleClick}>Get Coordinates</button>
              {geoError ? (
              <p>Error: {geoError}</p>
            ) : (
              <p>Latitude: {lat}, Longitude: {lng}</p>
          )}
      </div>
  )
}

export default App;