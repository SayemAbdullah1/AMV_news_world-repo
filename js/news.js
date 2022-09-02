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
        // console.log(category)
        const newCategory = document.createElement('div')
        newCategory.classList.add('col')
        // document.style.newCategory.display = 'inline'
        newCategory.innerHTML = `
            <p onclick="CategoryId('${category.category_id}')">${category.category_name}</p>
        `;
        categorySection.appendChild(newCategory)
    });
}

const CategoryId = (id) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => DisplayNews(data.data))
}
const DisplayNews = categoriesId =>{
    // console.log(categoriesId)
    const categoryContainer = document.getElementById('news-section')

    categoriesId.forEach(categoryId => {
        console.log(categoryId)
        const newCategory = document.createElement('div')
        newCategory.classList.add('col')
        // document.style.newCategory.display = 'inline'
        newCategory.innerHTML = `
            <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${categoryId.thumbnail_url ? categoryId.thumbnail_url : "not Found"}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${categoryId.title ? categoryId.title : "not Found"}</h5>
                                <p class="card-text">${categoryId.details}</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            <p ></p>
        `;
        categoryContainer.appendChild(newCategory)
        
        
    });
}

loadNews()