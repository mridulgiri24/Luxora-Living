import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map() {
  const usa = [38.7946, 106.5348];
  const newYork = [40.7128, 74.006];
  const losAngels = [34.0549, 118.2426];
  return (
    <>
      <MapContainer
        className="h-[350px] rounded-lg mt-32 mx-28"
        center={usa}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={newYork}></Marker>
        <Marker position={losAngels}></Marker>
      </MapContainer>
    </>
  );
}
