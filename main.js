//js код заработает тогда, когда подгрузится html код
document.addEventListener('DOMContentLoaded', function() {
    // Весь код оборачиваем в эту функцию (находим элементы по их id)
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const calculate1 = document.getElementById('calculate');
    const resultElement = document.getElementById('result');

    // Обработчик выбора товара
    productSelect.addEventListener('change', function() {
        currentPrice = parseInt(this.value) || 0; // конвертация строки в число и если преобразование не удалось то ставит 0
    });

    // Обработчик клика по кнопке "Рассчитать"
    calculate1.addEventListener('click', calculate);

    function calculate() {
        const quantity = parseInt(quantityInput.value) || 0;
        
        if (quantity <= 0) {
            resultElement.textContent = 'Ошибка: количество не может быть отрицательным или равным 0';
            resultElement.style.color = '#e74c3c';
            return;
        }
        
        if (currentPrice > 0) {
            const total = currentPrice * quantity;
            resultElement.textContent = `Итоговая стоимость: ${total} руб`;
            resultElement.style.color = '#000000ff';
        } else {
            resultElement.textContent = 'Пожалуйста, выберите товар';
            resultElement.style.color = '#e74c3c';
        }
    }
});