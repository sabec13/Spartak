// Table row flash on click
document.querySelectorAll("tbody tr").forEach(row => {
  row.addEventListener("click", () => {
    row.style.transition = "background 0.3s";
    row.style.background = "rgba(26,125,255,0.15)";
    setTimeout(() => row.style.background = "", 500);
  });
});

// Fallback SVG placeholder for missing team logos
document.querySelectorAll(".team-logo, .table-logo").forEach(img => {
  img.addEventListener("error", function() {
    const size  = this.classList.contains("table-logo") ? 32 : 52;
    const initials = (this.alt || "??").split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    const colors = {
      "Nitra":       "#cc0000",
      "Mikuláš":     "#003580",
      "Žilina":      "#0044aa",
      "Topoľčany":   "#005533",
      "Bystrica":    "#660000",
    };
    let fill = "#003580";
    for (const [key, val] of Object.entries(colors)) {
      if (this.alt && this.alt.includes(key)) { fill = val; break; }
    }
    this.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><circle cx='${size/2}' cy='${size/2}' r='${size/2}' fill='${encodeURIComponent(fill)}'/><text x='50%25' y='55%25' text-anchor='middle' dominant-baseline='middle' fill='white' font-size='${Math.round(size*0.35)}' font-family='Arial' font-weight='bold'>${initials}</text></svg>`;
    this.onerror = null;
  });
});
