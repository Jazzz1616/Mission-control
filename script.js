// 👨‍🚀 Astronauts
fetch("http://api.open-notify.org/astros.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("astroList");
    data.people.forEach(p => {
      let li = document.createElement("li");
      li.textContent = p.name + " (" + p.craft + ")";
      list.appendChild(li);
    });
  });

// 🌍 ISS Location
function getISS() {
  fetch("http://api.open-notify.org/iss-now.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("issLocation").textContent =
        `Lat: ${data.iss_position.latitude}, Lon: ${data.iss_position.longitude}`;
    });
}
setInterval(getISS, 3000);

// ⏳ Countdown
let time = 3600;
setInterval(() => {
  time--;
  document.getElementById("countdown").textContent = time + " seconds";
}, 1000);

// 📰 Mock news (we'll upgrade later)
document.getElementById("news").innerHTML = `
<li>🚀 NASA preparing Moon mission</li>
<li>🛰️ Satellite launch successful</li>
<li>🔴 Mars exploration continues</li>
`;