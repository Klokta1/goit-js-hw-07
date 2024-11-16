// Знаходимо список категорій за ID
const categoriesList = document.querySelector('#categories')

// Знаходимо всі елементи з класом 'item' у списку
const categoryItems = categoriesList.querySelectorAll('.item')

// Виводимо загальну кількість категорій
console.log(`Number of categories: ${categoryItems.length}`)

// Перебираємо кожну категорію
categoryItems.forEach((item) => {
    // Знаходимо заголовок категорії (тег <h2>)
    const categoryTitle = item.querySelector('h2').textContent

    // Знаходимо всі вкладені елементи <li>
    const elementsCount = item.querySelectorAll('ul > li').length

    // Виводимо результат у консоль
    console.log(`Category: ${categoryTitle}`)
    console.log(`Elements: ${elementsCount}`)
})
