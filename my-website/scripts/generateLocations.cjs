const fs = require("fs");
const https = require("https");

const cities = [
  "Toronto",
  "Ottawa",
  "Montreal",
  "Niagara Falls",
  "New York",
  "Charlottetown",
  "Halifax",
  "San Francisco",
  "San Jose",
  "Paris",
  "Beijing",
  "Shanghai",
  "Tokyo",
  "Taipei City",
  "Hartford",
  "Tucson", 
  "Fort Lauderdale"
];

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
      results.push({ id: index + 1, name: data.city, lat: data.lat, lng: data.lng });
    }
    await new Promise(r => setTimeout(r, 1000)); // Add delay to avoid API rate limits
  }

  fs.writeFileSync("locations.json", JSON.stringify(results, null, 2));
  console.log("locations.json generated successfully!");
})();


// to run type node scripts/generateLocations.cjs

