function calculateHarvest() {
        const wheat1 = parseFloat(document.getElementById("wheat1").value);
        const area1 = parseFloat(document.getElementById("area1").value);
        const wheat2 = parseFloat(document.getElementById("wheat2").value);
        const area2 = parseFloat(document.getElementById("area2").value);
        const wheat3 = parseFloat(document.getElementById("wheat3").value);
        const area3 = parseFloat(document.getElementById("area3").value);

        const harvest1 = wheat1 * area1;
        const harvest2 = wheat2 * area2;
        const harvest3 = wheat3 * area3;
        const totalHarvest = harvest1 + harvest2 + harvest3;

        document.getElementById("result1").textContent = harvest1.toFixed(2);
        document.getElementById("result2").textContent = harvest2.toFixed(2);
        document.getElementById("result3").textContent = harvest3.toFixed(2);
        document.getElementById("totalResult").textContent =
          totalHarvest.toFixed(2);
      }