let body = document.querySelector('body');

body.addEventListener('click', function (event) {
	// Проверяем чтобы клик был по кнопкам "Плюс" или "Минус"
	if (event.target.hasAttribute('data-action')) {
		// Работа со счетчиком
		// Находим div c счетчиком
		let counterWrapper = event.target.closest('.counter-wrapper');
		let counter = counterWrapper.querySelector('[data-counter]');

		// 3. Для кнопки + → Увеличиваем
		if (event.target.dataset.action === 'plus') {
			counter.innerText = ++counter.innerText;
		} else {
			// 4. Для кнопки - → Проверяем на > 1 и Уменьшаем
			if (parseInt(counter.innerText) > 1) {
				// действие, если условие выполняется
				counter.innerText = --counter.innerText; // Уменьшили счетчик на 1
			} else if ( parseInt(counter.innerText) === 1 && counter.closest('.cart-wrapper') ) {
				counter.closest('.cart-item').remove();
			}
		}
		// Пересчитываем корзину
		toggleCartStatus();

	}
});