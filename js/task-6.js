function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}

// Посилання на елементи
const controls = document.querySelector('#controls')
const input = controls.querySelector('input')
const createBtn = controls.querySelector('[data-create]')
const destroyBtn = controls.querySelector('[data-destroy]')
const boxesContainer = document.querySelector('#boxes')

// Функція для створення колекції квадратів
function createBoxes(amount) {
    const boxes = []
    let size = 30

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div')
        box.style.width = `${size}px`
        box.style.height = `${size}px`
        box.style.backgroundColor = getRandomHexColor()
        box.style.margin = '5px'
        boxes.push(box)
        size += 10 // Збільшуємо розмір для кожного наступного
    }

    // Очищення старих квадратів і додавання нових
    destroyBoxes()
    boxesContainer.append(...boxes)
}

// Функція для очищення колекції квадратів
function destroyBoxes() {
    boxesContainer.innerHTML = ''
}

// Обробник події для кнопки Create
createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value.trim(), 10)

    // Перевірка валідності введеного значення
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount)
        input.value = '' // Очищаємо значення input
    }
})

// Обробник події для кнопки Destroy
destroyBtn.addEventListener('click', () => {
    destroyBoxes()
    input.value = '' // Очищаємо значення input
})
