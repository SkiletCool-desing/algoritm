function calculateTriangleProperties() {
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);

        if (isNaN(sideA) || isNaN(sideB)) {
          alert("Будь ласка, введіть коректні значення для обох катетів.");
          return;
        }

        const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
        const area = (1 / 2) * sideA * sideB;

        document.getElementById("hypotenuseResult").textContent =
          hypotenuse.toFixed(2);
        document.getElementById("areaResult").textContent = area.toFixed(2);
      }