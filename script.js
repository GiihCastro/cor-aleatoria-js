document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorBtn');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

        document.body.style.backgroundColor = randomColor;

        message.textContent = `A cor de fundo foi alterada para ${randomColor}`;
    });
});
