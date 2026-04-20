const days = [
  {
    date: "Monday, April 20",
    title: "SoHo / Nolita, Brooklyn move, and skyline evening",
    subtitle: "A shopping-heavy start, then an easy Brooklyn waterfront sunset flow.",
    budgetRange: "$51–$102",
    budgetItems: [
      "Attractions: $0, Brooklyn Bridge Park is free.",
      "Transit: about $6–$12.",
      "Food: about $45–$90 depending on dinner style in Williamsburg."
    ],
    notes: [
      "Best used as a low-ticket, high-wandering day.",
      "Good sunset sequence: DUMBO or Williamsburg first, then Brooklyn Bridge Park.",
      "Shopping is intentionally not counted in the totals."
    ],
    mapLink:
      "https://www.google.com/maps/dir/?api=1&origin=SoHo+Manhattan&destination=Williamsburg+Brooklyn&travelmode=transit&waypoints=The+Tillary+Brooklyn%7CDUMBO+Brooklyn%7CBrooklyn+Bridge+Park",
    stops: [
      { name: "SoHo / Nolita boutique browsing", lat: 40.7236, lng: -73.9975 },
      { name: "Brooklyn check-in", lat: 40.6932, lng: -73.9833 },
      { name: "DUMBO waterfront", lat: 40.7033, lng: -73.9881 },
      { name: "Brooklyn Bridge Park", lat: 40.7003, lng: -73.9967 },
      { name: "Williamsburg dinner", lat: 40.7181, lng: -73.9571 }
    ]
  },
  {
    date: "Tuesday, April 21",
    title: "Williamsburg, Bathhouse, High Line, and Hudson Yards",
    subtitle: "Spa break in the middle, then a Chelsea to Hudson Yards run with an optional Edge stop.",
    budgetRange: "$80–$141 without Edge, $116–$185 with Edge",
    budgetItems: [
      "Bathhouse Williamsburg day pass starts at $39.",
      "High Line and Hudson Yards browsing are free.",
      "Transit: about $6–$12.",
      "Food: about $35–$90 depending on dinner with Divya.",
      "Optional Edge adds roughly $36–$44."
    ],
    notes: [
      "This day gets expensive fast if Edge is added late.",
      "Dinner with Divya is still the most location-flexible piece.",
      "The High Line works best northbound into Hudson Yards."
    ],
    mapLink:
      "https://www.google.com/maps/dir/?api=1&origin=Williamsburg+Brooklyn&destination=Hudson+Yards+NYC&travelmode=transit&waypoints=Bathhouse+Williamsburg%7CHigh+Line+New+York%7CEdge+NYC",
    stops: [
      { name: "Williamsburg breakfast", lat: 40.7177, lng: -73.9576 },
      { name: "Williamsburg boutiques", lat: 40.7189, lng: -73.9562 },
      { name: "Bathhouse Williamsburg", lat: 40.7183, lng: -73.9607 },
      { name: "High Line entry in Chelsea", lat: 40.7479, lng: -74.0049 },
      { name: "Hudson Yards", lat: 40.7539, lng: -74.0018 },
      { name: "Optional Edge", lat: 40.7530, lng: -74.0007 }
    ]
  },
  {
    date: "Wednesday, April 22",
    title: "Lower Manhattan, West Village, Bleecker, and Manhatta",
    subtitle: "A downtown to West Village loop, capped by the priciest dinner of the trip.",
    budgetRange: "$146–$200 without alcohol, $221–$295 with pairing",
    budgetItems: [
      "Day attractions are free unless you add a paid deck.",
      "Transit: about $6–$12.",
      "Lunch or coffee: about $20–$40.",
      "Manhatta dinner: $120 for 3-course, $148 for 4-course.",
      "Wine pairing adds $75–$95."
    ],
    notes: [
      "This is still the most expensive day, especially with wine pairing.",
      "Carrie’s apartment and Bleecker fit well as a single walkable West Village block.",
      "Good to keep the afternoon slower so dinner does not feel rushed."
    ],
    mapLink:
      "https://www.google.com/maps/dir/?api=1&origin=Oculus+NYC&destination=Manhatta+NYC&travelmode=transit&waypoints=9%2F11+Memorial%7CWall+Street%7C66+Perry+Street+NYC%7CBleecker+Street+NYC",
    stops: [
      { name: "Oculus / World Trade Center", lat: 40.7116, lng: -74.0119 },
      { name: "9/11 Memorial exterior", lat: 40.7115, lng: -74.0134 },
      { name: "Wall Street / FiDi", lat: 40.7065, lng: -74.0094 },
      { name: "Carrie’s apartment, West Village", lat: 40.7352, lng: -74.0069 },
      { name: "Bleecker Street", lat: 40.7308, lng: -74.0025 },
      { name: "Manhatta dinner", lat: 40.7076, lng: -74.0090 }
    ]
  },
  {
    date: "Thursday, April 23",
    title: "Move to LIC, Museum Mile, and dinner with friends",
    subtitle: "A cleaner uptown museum day, then back to Long Island City for dinner.",
    budgetRange: "$76–$152",
    budgetItems: [
      "The Met general admission: $30 adult, pay-what-you-wish for some local categories.",
      "Guggenheim general admission: $25 adult.",
      "Transit: about $6–$12.",
      "Daytime food or coffee: about $15–$40.",
      "Dinner with friends: about $30–$80 if paying your own way."
    ],
    notes: [
      "Museum Mile is much easier now that New Jersey is out.",
      "LIC base simplifies the last two nights a lot.",
      "Central Park works well as a reset between museums."
    ],
    mapLink:
      "https://www.google.com/maps/dir/?api=1&origin=Long+Island+City+Queens&destination=Long+Island+City+Queens&travelmode=transit&waypoints=The+Metropolitan+Museum+of+Art%7CCentral+Park%7CGuggenheim+Museum",
    stops: [
      { name: "Long Island City base", lat: 40.7457, lng: -73.9487 },
      { name: "The Met", lat: 40.7794, lng: -73.9632 },
      { name: "Central Park break", lat: 40.7810, lng: -73.9663 },
      { name: "Guggenheim", lat: 40.7830, lng: -73.9590 },
      { name: "Dinner with friends in LIC", lat: 40.7468, lng: -73.9442 }
    ]
  },
  {
    date: "Friday, April 24",
    title: "Flex day, Koreatown dinner, and The Lion King",
    subtitle: "Buffer day energy, with dinner and theater lined up in the same zone so the night flows cleanly.",
    budgetRange: "$163–$223",
    budgetItems: [
      "The Lion King currently starts around $126.72.",
      "Transit: about $6–$12.",
      "Food: about $30–$85 before the show.",
      "Koreatown fits naturally because it is close to the theater district."
    ],
    notes: [
      "Recommended K-town options: Cho Dang Gol, Her Name Is Han, or Jongro BBQ.",
      "This is the best buffer day if anything slips earlier in the week.",
      "Keep the afternoon flexible instead of over-planning it."
    ],
    mapLink:
      "https://www.google.com/maps/dir/?api=1&origin=Long+Island+City+Queens&destination=Minskoff+Theatre+NYC&travelmode=transit&waypoints=Bryant+Park%7CKoreatown+NYC",
    stops: [
      { name: "Long Island City base", lat: 40.7457, lng: -73.9487 },
      { name: "Midtown flex area", lat: 40.7536, lng: -73.9832 },
      { name: "Koreatown dinner", lat: 40.7478, lng: -73.9862 },
      { name: "The Lion King at Minskoff Theatre", lat: 40.7580, lng: -73.9855 }
    ]
  },
  {
    date: "Saturday, April 25",
    title: "Midtown and Fifth Avenue half-day, final shopping, departure",
    subtitle: "Keep this one light. The real job is leaving with enough buffer instead of manufacturing chaos.",
    budgetRange: "$26–$92",
    budgetItems: [
      "Attractions: $0 unless something extra gets added.",
      "Transit: about $6–$12.",
      "Food: about $20–$80."
    ],
    notes: [
      "Do not book a late attraction.",
      "Keep shopping concentrated in one area.",
      "Build in baggage and airport-transfer cushion."
    ],
    mapLink:
      "https://www.google.com/maps/dir/?api=1&origin=Long+Island+City+Queens&destination=Rockefeller+Center+NYC&travelmode=transit&waypoints=Fifth+Avenue+NYC%7CMidtown+Shopping+District",
    stops: [
      { name: "Long Island City base", lat: 40.7457, lng: -73.9487 },
      { name: "Midtown / Fifth Avenue", lat: 40.7607, lng: -73.9755 },
      { name: "Final shopping block", lat: 40.7551, lng: -73.9830 },
      { name: "Easy late lunch area", lat: 40.7527, lng: -73.9772 }
    ]
  }
];

const summaryStats = [
  { label: "Trip budget range", value: "$552–$1,045" },
  { label: "Hotel included?", value: "No" },
  { label: "Shopping included?", value: "No" },
  { label: "Biggest splurge day", value: "Wed 4/22" }
];

const heroStatsEl = document.getElementById("hero-stats");
const daysEl = document.getElementById("days");

heroStatsEl.innerHTML = summaryStats
  .map(
    (stat) => `
      <div class="stat">
        <span class="stat-label">${stat.label}</span>
        <span class="stat-value">${stat.value}</span>
      </div>
    `
  )
  .join("");

days.forEach((day, index) => {
  const card = document.createElement("article");
  card.className = "day-card";

  const mapId = `map-${index}`;

  card.innerHTML = `
    <div class="day-header">
      <div class="day-title-wrap">
        <p class="day-date">${day.date}</p>
        <h3>${day.title}</h3>
        <p class="day-subtitle">${day.subtitle}</p>
      </div>
      <div class="day-cost">${day.budgetRange}</div>
    </div>

    <div class="day-body">
      <div class="detail-grid">
        <section class="route-list">
          <p class="muted-label">Route order</p>
          <ol>
            ${day.stops.map((stop) => `<li><strong>${stop.name}</strong></li>`).join("")}
          </ol>
          <div class="link-row">
            <a class="link-chip primary" href="${day.mapLink}" target="_blank" rel="noreferrer">Open route in Google Maps</a>
          </div>
        </section>

        <section class="budget-box">
          <p class="muted-label">Budget notes</p>
          <ul>
            ${day.budgetItems.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section class="notes-box">
          <p class="muted-label">Planning notes</p>
          <ul>
            ${day.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
        </section>
      </div>

      <div>
        <div id="${mapId}" class="map" aria-label="Map for ${day.date}"></div>
      </div>
    </div>
  `;

  daysEl.appendChild(card);
  renderMap(mapId, day.stops, index);
});

function renderMap(id, stops, seed) {
  const map = L.map(id, {
    scrollWheelZoom: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const latLngs = stops.map((stop) => [stop.lat, stop.lng]);
  const color = ["#2563eb", "#0f766e", "#9333ea", "#dc2626", "#ea580c", "#0891b2"][seed % 6];

  const polyline = L.polyline(latLngs, {
    color,
    weight: 5,
    opacity: 0.82,
    lineJoin: "round"
  }).addTo(map);

  stops.forEach((stop, idx) => {
    const marker = L.circleMarker([stop.lat, stop.lng], {
      radius: 10,
      color: "white",
      weight: 3,
      fillColor: color,
      fillOpacity: 1
    }).addTo(map);

    marker.bindPopup(`<strong>${idx + 1}. ${stop.name}</strong>`);
  });

  map.fitBounds(polyline.getBounds(), {
    padding: [30, 30]
  });
}
