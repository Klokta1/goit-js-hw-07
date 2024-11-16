function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}

// Знаходимо потрібні елементи
const changeColorButton = document.querySelector('.change-color')
const bodyElement = document.body
const colorSpan = document.querySelector('.color')

// Додаємо обробник події click на кнопку
changeColorButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor() // Генеруємо випадковий колір
    bodyElement.style.backgroundColor = randomColor // Змінюємо колір фону body
    colorSpan.textContent = randomColor // Відображаємо значення кольору в span
})
