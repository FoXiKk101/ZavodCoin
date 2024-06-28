document.addEventListener('DOMContentLoaded', (event) => {
    let score = 0;
    const scoreElement = document.getElementById('score');
    const clickerButton = document.getElementById('clickerButton');

    clickerButton.addEventListener('click', () => {
        score++;
        scoreElement.textContent = score.toLocaleString();
    });
});
