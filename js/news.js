const loadNews = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
        .then(data => dislayCategory(data.data.news_category))
}

const dislayCategory = (categories) =>{
    // console.log(categories)
    const categorySection = document.getElementById('category-section-title')
    categories.forEach(category => {
        console.log(category)
        const newCategory = document.createElement('div')
        newCategory.classList.add('col')
        // document.style.newCategory.display = 'inline'
        newCategory.innerHTML = `
            <h4><a href="#">${category.category_name}</a></h4>
        `;
        categorySection.appendChild(newCategory)
    });
}


loadNews()