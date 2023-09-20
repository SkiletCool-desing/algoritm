function calculateEnergy() {
            const mass = parseFloat(document.getElementById("mass").value);
            const height = parseFloat(document.getElementById("height").value);
            const velocity = parseFloat(document.getElementById("velocity").value);

            if (isNaN(mass) || isNaN(height) || isNaN(velocity)) {
                alert("Будь ласка, введіть коректні значення для маси, висоти та швидкості.");
                return;
            }

            const kineticEnergy = 0.5 * mass * velocity * velocity;
            const potentialEnergy = mass * 9.81 * height; // 9.81 м/с² - прискорення вільного падіння

            document.getElementById("result").innerHTML = `Кінетична енергія: ${kineticEnergy.toFixed(2)} Дж<br>Потенціальна енергія: ${potentialEnergy.toFixed(2)} Дж`;
        }