// Знаходимо форму
const loginForm = document.querySelector('.login-form')

// Додаємо обробник події submit
loginForm.addEventListener('submit', (event) => {
    event.preventDefault() // Забороняємо перезавантаження сторінки

    // Отримуємо дані з форми
    const formElements = event.currentTarget.elements
    const email = formElements.email.value.trim()
    const password = formElements.password.value.trim()

    // Перевіряємо, чи всі поля заповнені
    if (!email || !password) {
        alert('All form fields must be filled in')
        return
    }

    // Створюємо об'єкт із введеними даними
    const formData = {
        email,
        password,
    }

    // Виводимо об'єкт у консоль
    console.log(formData)

    // Очищаємо форму
    loginForm.reset()
})
