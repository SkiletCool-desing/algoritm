document.addEventListener('DOMContentLoaded', function () {
    const butterPrice = 8.50;
    const creamPrice = 2.40;
    const sourCreamPrice = 4.10;

    const butterInput = document.getElementById('butter');
    const creamInput = document.getElementById('cream');
    const sourCreamInput = document.getElementById('sourCream');
    const butterCost = document.getElementById('butterCost');
    const creamCost = document.getElementById('creamCost');
    const sourCreamCost = document.getElementById('sourCreamCost');
    const totalCost = document.getElementById('totalCost');

    function updateCosts() {
        const butterQuantity = parseFloat(butterInput.value) || 0;
        const creamQuantity = parseFloat(creamInput.value) || 0;
        const sourCreamQuantity = parseFloat(sourCreamInput.value) || 0;

        const butterTotal = butterQuantity * butterPrice;
        const creamTotal = creamQuantity * creamPrice;
        const sourCreamTotal = sourCreamQuantity * sourCreamPrice;

        butterCost.textContent = `Сума: ${butterTotal.toFixed(2)} грн`;
        creamCost.textContent = `Сума: ${creamTotal.toFixed(2)} грн`;
        sourCreamCost.textContent = `Сума: ${sourCreamTotal.toFixed(2)} грн`;

        const total = butterTotal + creamTotal + sourCreamTotal;
        totalCost.textContent = `Загальна сума: ${total.toFixed(2)} грн`;
    }

    butterInput.addEventListener('input', updateCosts);
    creamInput.addEventListener('input', updateCosts);
    sourCreamInput.addEventListener('input', updateCosts);

    updateCosts(); // Викликаємо функцію під час завантаження сторінки для відображення початкових сум
});
