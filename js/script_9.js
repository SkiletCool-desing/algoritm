function calculateSurfaceAreaAndVolume() {
            const radius = parseFloat(document.getElementById("radius").value);

            if (isNaN(radius)) {
                alert("Будь ласка, введіть коректне значення для радіуса.");
                return;
            }

            const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
            const volume = (4/3) * Math.PI * Math.pow(radius, 3);

            document.getElementById("result").innerHTML = `Площа поверхні: ${surfaceArea.toFixed(2)} кв.м<br>Об'єм: ${volume.toFixed(2)} куб.м`;
        }