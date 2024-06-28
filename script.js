document.addEventListener('DOMContentLoaded', () => {
    let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
    const scoreElement = document.getElementById('score');
    const clickerButton = document.getElementById('clickerButton');
    const coinImage = document.getElementById('coinImage');

    // Обновляем отображение счета при загрузке страницы
    scoreElement.textContent = score.toLocaleString();

    clickerButton.addEventListener('click', () => {
        score++;
        scoreElement.textContent = score.toLocaleString();
        localStorage.setItem('score', score);

        // Добавить класс анимации при клике
        coinImage.classList.add('clicked');

        // Удалить класс анимации после завершения анимации
        setTimeout(() => {
            coinImage.classList.remove('clicked');
        }, 100);
    });
});
