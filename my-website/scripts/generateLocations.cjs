// const fs = require("fs");
// const https = require("https");

// const cities = [
//   "Toronto",
//   "Ottawa",
//   "Montreal",
//   "Niagara Falls",
//   "New York",
//   "Charlottetown",
//   "Halifax",
//   "San Francisco",
//   "San Jose",
//   "Paris",
//   "Beijing",
//   "Shanghai",
//   "Tokyo",
//   "Taipei City",
//   "Hartford",
//   "Tucson", 
//   "Fort Lauderdale"
// ];

// const fetchCoordinates = (city) => {
//   return new Promise((resolve, reject) => {
//     const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;
//     https.get(url, { headers: { 'User-Agent': 'Node.js Script' } }, (res) => {
//       let data = "";

//       res.on("data", (chunk) => { data += chunk; });
//       res.on("end", () => {
//         const results = JSON.parse(data);
//         if (results.length > 0) {
//           const { lat, lon } = results[0];
//           resolve({ city, lat: parseFloat(lat), lng: parseFloat(lon) });
//         } else {
//           console.warn(`No coordinates found for: ${city}`);
//           resolve(null);
//         }
//       });
//     }).on("error", (err) => reject(err));
//   });
// };

// (async () => {
//   const results = [];
//   for (const [index, city] of cities.entries()) {
//     const data = await fetchCoordinates(city);
//     if (data) {
//       results.push({ id: index + 1, name: data.city, lat: data.lat, lng: data.lng });
//     }
//     await new Promise(r => setTimeout(r, 1000)); // Add delay to avoid API rate limits
//   }

//   fs.writeFileSync("locations.json", JSON.stringify(results, null, 2));
//   console.log("locations.json generated successfully!");
// })();



const fs = require("fs");
const path = require("path");
const https = require("https");

const cities = [
  "Toronto",
  "Ottawa",
  "Montreal",
  "Hamilton",
  "Sandbanks Provincial Park",
  "Orillia",
  "Lake Muskoka",
  "Niagara Falls",
  "New York",
  "Charlottetown",
  "Halifax",
  "San Francisco",
  "Sausalito",
  "San Jose",
  "Santa Cruz County",
  "Fremont",
  "Oakland",
  "Paris",
  "Beijing",
  "Shanghai",
  "Tokyo",
  "Osaka",
  "Kyoto",
  "Taipei City",
  "Hartford",
  "Tucson",
  "Fort Lauderdale", 
  "Albany"
  
];

// Path to the images directory (adjust if different)
const imagesDir = path.join(__dirname, "../public/images/");
const imageExtensions = [".jpg", ".jpeg", ".png", ".heic", ".heif"];

const findImageFile = (city) => {
  for (const ext of imageExtensions) {
    const fileName = `${city}${ext}`;
    const filePath = path.join(imagesDir, fileName);
    if (fs.existsSync(filePath)) {
      return { fileName, filePath };
    }
  }
  return null;
};

const checkImage = (city) => {
  const imageInfo = findImageFile(city);
  if (imageInfo) {
    return `/images/${imageInfo.fileName}`;
  }
  return null;
};

const fetchCoordinates = (city) => {
  return new Promise((resolve, reject) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;
    https.get(url, { headers: { 'User-Agent': 'Node.js Script' } }, (res) => {
      let data = "";

      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => {
        const results = JSON.parse(data);
        if (results.length > 0) {
          const { lat, lon } = results[0];
          resolve({ city, lat: parseFloat(lat), lng: parseFloat(lon) });
        } else {
          console.warn(`No coordinates found for: ${city}`);
          resolve(null);
        }
      });
    }).on("error", (err) => reject(err));
  });
};

(async () => {
  const results = [];
  for (const [index, city] of cities.entries()) {
    const data = await fetchCoordinates(city);
    if (data) {
      const image = checkImage(city);
      results.push({
        id: index + 1,
        name: data.city,
        lat: data.lat,
        lng: data.lng,
        image // Will be null if no image exists
      });
    }
    await new Promise(r => setTimeout(r, 1000)); // Respect API rate limits
  }

  fs.writeFileSync("locations.json", JSON.stringify(results, null, 2));
  console.log("locations.json generated successfully!");
})();
// to run type node scripts/generateLocations.cjs

