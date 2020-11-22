import { TileLayer, Marker, Popup, MapContainer, useMapEvents, Tooltip } from 'react-leaflet';
import React, { useState } from 'react';
import Leaflet, { LatLng, LatLngLiteral, LatLngTuple } from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

// const DefaultIcon = Leaflet.icon({
//   ...Leaflet.Icon.Default.prototype.options,
//   iconUrl: icon,
//   iconRetinaUrl: iconRetina,
//   shadowUrl: iconShadow,
// });
// Leaflet.Marker.prototype.options.icon = DefaultIcon;

export default function SkateApp() {
  const position: LatLng | LatLngLiteral | LatLngTuple | undefined = [-4.781379, 105.499322];
  const bounds: Leaflet.LatLngBounds | Leaflet.LatLngBoundsLiteral | undefined =
    [[-4.775656504833561, 105.48912329690062], [-4.789696222664833, 105.520534430988]];

  return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={true}>
      {/* <TileLayer
        tms={true}
        opacity={1}
        minZoom={18}
        maxZoom={22}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="./data/{z}/{x}/{y}.png"
      /> */}
      {/* 17-21 */}
      <TileLayer
        // zIndex={-1}
        minZoom={18}
        maxZoom={22}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div style={{ backgroundColor: 'red', padding: 40 }}>
            A pretty CSS3 popup. <br /> Easily customizable.
          </div>
        </Popup>
        {/* <Tooltip onOpen={() => console.info('tootl')}>dsadsadsadsa</Tooltip> */}
      </Marker>
      {/* <LocationMarker /> */}
    </MapContainer>
  );
}

export function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    zoomend(e: any) {
      // console.info(e);
      console.info('zoome', map.getZoom());
      // map.getZoom()
    },
    click(e: Leaflet.LeafletMouseEvent) {
      console.info('click', e);
      // const tooltip: Leaflet.Tooltip = 'hellow';
      // map.openTooltip(tooltip);
      // map.locate();
    },
    locationfound(e: Leaflet.LocationEvent) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}