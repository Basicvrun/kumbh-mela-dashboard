// src/components/LiveCrowdMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LiveCrowdMap = () => {
  const position = [25.4303, 81.8463]; // Example position (Prayagraj, Kumbh Mela)

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      scrollWheelZoom={false} 
      className="rounded-3xl shadow-2xl"
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Use default marker without custom icon */}
      <Marker position={position}>
        <Popup>
          Kumbh Mela Location.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LiveCrowdMap;
