import { useState } from 'react';
import MapboxComponent from '../components/Mapbox/Mapbox'
import Header from '../components/Header/Header'
import './App.css'

function App() {
  const [lat, setLat] = useState<number>(57.7);
  const [lng, setLng] = useState<number>(11.89);
  const [zoom, setZoom] = useState<number>(10);

  return (
    <div>
      <Header/>
      <main>
        <MapboxComponent lat={lat} lng={lng} zoom={zoom} setLat={setLat} setLng={setLng} setZoom={setZoom} />
      </main>
    </div>
  )
}

export default App
