import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import '../../index.css'
import { listData } from "../../Lib/data";
import { Link } from "react-router-dom";


function Map() {
  return (
    <div>
      <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className="w-full h-heroHeight rounded-lg">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listData.map(item=>(
      <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="w-[200px]">
          <img src={item.img} alt="" className="w-full h-24 rounded-lg"/>
          <div className="flex items-start justify-center w-full flex-col">
            <Link to={`details/${item.id}`} className="text-[12px] pt-2">{item.title}</Link>
            <div className="flex items-center justify-between w-full pt-3">
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
    ))}
      </MapContainer>
    </div>
  );
}

export default Map;
