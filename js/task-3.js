// Знаходимо необхідні елементи
const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

// Додаємо обробник події input
nameInput.addEventListener('input', () => {
    const trimmedValue = nameInput.value.trim() // Видаляємо пробіли по краях
    nameOutput.textContent = trimmedValue || 'Anonymous' // Підставляємо значення або "Anonymous"
})
