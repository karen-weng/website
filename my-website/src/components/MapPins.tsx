// // import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import locations from "../data/locations.json";

// // Fix marker icon issues
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
// });

// // export const MapWithPins = () => {
// //   return (
// //     <div style={{ height: "400px", width: "100%", marginBottom: "24px" }}>
// //       <MapContainer center={[43.65107, -79.347015]} zoom={2} style={{ height: "100%", width: "100%" }}>
// //         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// //         {locations.map(loc => (
// //           <Marker key={loc.id} position={[loc.lat, loc.lng]}>
// //             <Popup>{loc.name}</Popup>
// //           </Marker>
// //         ))}
// //       </MapContainer>
// //     </div>
// //   );
// // };

// export const MapWithPins = () => {
//   return (
//     <div style={{ height: "400px", width: "100%", marginBottom: "24px" }}>
//       <MapContainer center={[43.65107, -79.347015]} zoom={2} style={{ height: "100%", width: "100%" }}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {locations.map(loc => (
//           <Marker key={loc.id} position={[loc.lat, loc.lng]}>
//             <Popup>
//               <div style={{ textAlign: "center" }}>
//                 <h3>{loc.name}</h3>
//                 {loc.image && (
//                   <img 
//                     src={loc.image} 
//                     alt={loc.name} 
//                     style={{ width: "150px", borderRadius: "8px", marginTop: "8px" }} 
//                   />
//                 )}
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };


import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import locations from "../data/locations.json";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
});

// Helper component to load images safely
const SafeImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = React.useState(true);

  return loaded ? (
    <img
      src={src}
      alt={alt}
      style={{ width: "150px", borderRadius: "8px", marginTop: "8px" }}
      onError={() => setLoaded(false)}
    />
  ) : null;
};

export const MapWithPins = () => {
  return (
    <div style={{ height: "400px", width: "100%", marginBottom: "24px" }}>
      <MapContainer center={[43.65107, -79.347015]} zoom={2} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map(loc => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <div style={{ textAlign: "center" }}>
                <h3>{loc.name}</h3>
                {/* This will only show the image if it loads successfully */}
                {loc.image && <SafeImage src={loc.image} alt={loc.name} />}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWithPins;