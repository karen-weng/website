import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import locations from "../data/locations.json";

// Create custom pin icons
const createCustomPinIcon = (color: string = '#e74c3c') => {
  return L.divIcon({
    className: 'custom-pin',
    html: `
      <div style="
        position: relative;
        width: 30px;
        height: 30px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-weight: bold;
          font-size: 12px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        ">📍</div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
};

// Different colored pins for different regions
const getPinColor = (location: any) => {
  const name = location.name.toLowerCase();
  if (name.includes('toronto') || name.includes('hamilton') || name.includes('ottawa') || name.includes('montreal') || name.includes('orillia') || name.includes('sandbanks')) {
    return '#e74c3c'; // Red for Canada
  } else if (name.includes('san francisco') || name.includes('oakland') || name.includes('san jose') || name.includes('sausalito') || name.includes('fremont') || name.includes('santa cruz')) {
    return '#3498db'; // Blue for California
  } else if (name.includes('tokyo') || name.includes('osaka') || name.includes('kyoto') || name.includes('taipei')) {
    return '#f39c12'; // Orange for Asia
  } else if (name.includes('hartford') || name.includes('albany') || name.includes('tucson')) {
    return '#9b59b6'; // Purple for other US locations
  } else {
    return '#2ecc71'; // Green for other locations
  }
};

// Helper component to load images safely with better styling
const SafeImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <div style={{ marginTop: '12px' }}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          style={{ 
            width: "200px", 
            height: "150px",
            objectFit: "cover",
            borderRadius: "12px", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            border: "2px solid #f0f0f0",
            transition: "transform 0.2s ease"
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
      ) : (
        <div style={{
          width: "200px",
          height: "150px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6c757d",
          fontSize: "14px",
          border: "2px dashed #dee2e6"
        }}>
          📷 Image not available
        </div>
      )}
    </div>
  );
};

// Add a legend component
const MapLegend = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'white',
      padding: '12px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      zIndex: 1000,
      fontSize: '12px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ fontWeight: '600', marginBottom: '8px', color: '#2c3e50' }}>📍 Locations</div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
        <div style={{ width: '12px', height: '12px', backgroundColor: '#e74c3c', borderRadius: '50%', marginRight: '8px' }}></div>
        <span>Canada</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
        <div style={{ width: '12px', height: '12px', backgroundColor: '#3498db', borderRadius: '50%', marginRight: '8px' }}></div>
        <span>California</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
        <div style={{ width: '12px', height: '12px', backgroundColor: '#f39c12', borderRadius: '50%', marginRight: '8px' }}></div>
        <span>Asia</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
        <div style={{ width: '12px', height: '12px', backgroundColor: '#9b59b6', borderRadius: '50%', marginRight: '8px' }}></div>
        <span>Other US</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '12px', height: '12px', backgroundColor: '#2ecc71', borderRadius: '50%', marginRight: '8px' }}></div>
        <span>Other</span>
      </div>
    </div>
  );
};

export const MapWithPins = () => {
  return (
    <div style={{ height: "500px", width: "100%", marginBottom: "24px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", position: "relative" }}>
      <MapContainer 
        center={[43.65107, -79.347015]} 
        zoom={2} 
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map(loc => {
          const pinColor = getPinColor(loc);
          const customIcon = createCustomPinIcon(pinColor);
          
          return (
            <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
              <Popup 
                maxWidth={300}
                minWidth={250}
                className="custom-popup"
                closeButton={true}
                autoClose={false}
                closeOnClick={false}
              >
                <div style={{ 
                  textAlign: "center", 
                  padding: "8px",
                  fontFamily: "system-ui, -apple-system, sans-serif"
                }}>
                  <h3 style={{ 
                    margin: "0 0 8px 0", 
                    color: "#2c3e50",
                    fontSize: "18px",
                    fontWeight: "600"
                  }}>
                    {loc.name}
                  </h3>
                  
                  {loc.image && (
                    <SafeImage src={loc.image} alt={loc.name} />
                  )}
                  
                  <div style={{
                    marginTop: "12px",
                    padding: "8px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "#6c757d"
                  }}>
                    📍 {loc.lat.toFixed(4)}, {loc.lng.toFixed(4)}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <MapLegend />
    </div>
  );
};

export default MapWithPins;
