import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { auth, signOut } from '../firebase';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '90vh',
};

const defaultCenter = {
  lat: 12.9716,
  lng: 77.5946, 
};

function MapPage() {
  const [markers, setMarkers] = useState([]);
  const [directions, setDirections] = useState(null);
  const [info, setInfo] = useState('');
  const navigate = useNavigate();

  const handleMapClick = (e) => {
    if (markers.length >= 2) return;

    const clicked = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };

    setMarkers((prev) => [...prev, clicked]);
    setDirections(null);
    setInfo('');
  };

  const drawRoute = () => {
    if (markers.length < 2) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: markers[0],
        destination: markers[1],
        travelMode: 'DRIVING',
      },
      (result, status) => {
        if (status === 'OK') {
          setDirections(result);
          const leg = result.routes[0].legs[0];
          setInfo(`🛣️ Distance: ${leg.distance.text} | 🕒 Time: ${leg.duration.text}`);
        } else {
          console.error('Failed to get directions:', status);
        }
      }
    );
  };

  const resetMap = () => {
    setMarkers([]);
    setDirections(null);
    setInfo('');
  };

  const handleLogout = () => {
    signOut(auth).then(() => navigate('/'));
  };

  return (
    <div>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <button onClick={handleLogout} style={{ marginRight: '10px' }}>Logout</button>
        <button onClick={drawRoute} disabled={markers.length < 2} style={{ marginRight: '10px' }}>
          Draw Route
        </button>
        <button onClick={resetMap}>Reset</button>
        <div style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>{info}</div>
      </div>

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={12}
          onClick={handleMapClick}
        >
          {markers.map((position, index) => (
            <Marker key={index} position={position} label={index === 0 ? 'A' : 'B'} />
          ))}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapPage;
