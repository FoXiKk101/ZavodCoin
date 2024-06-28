document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    const scoreElement = document.getElementById('score');
    const clickerButton = document.getElementById('clickerButton');
    const coinImage = document.getElementById('coinImage');

    clickerButton.addEventListener('click', () => {
        score++;
        scoreElement.textContent = score.toLocaleString();

        // Добавить класс анимации при клике
        coinImage.classList.add('clicked');

        // Удалить класс анимации после завершения анимации
        setTimeout(() => {
            coinImage.classList.remove('clicked');
        }, 100);
    });
});
