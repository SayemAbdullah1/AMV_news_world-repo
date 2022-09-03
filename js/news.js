

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
        <p class="d-flex flex-wrap" onclick="CategoryId('${category.category_id}')">${category.category_name}</p>
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
    const totalItems = document.getElementById('Total-item')
    // totalLength.forEach(length => {
    //     totalItems.innerHTML = `
    //     <p>${length.category_id.length} </p>
    // `;
    // });
    const categoryContainer = document.getElementById('news-section')

    categoryContainer.innerText = '';

    categoriesId.forEach(categoryId => {
        console.log(categoryId)
        const newCategory = document.createElement('div')
        newCategory.classList.add('col')
        // document.style.newCategory.display = 'inline'
        newCategory.innerHTML = `
            <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="${categoryId.thumbnail_url ? categoryId.thumbnail_url : 'not Found'}" class="img-fluid w-100 rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${categoryId.title ? categoryId.title : 'not Found'}</h5>
                                <p class="card-text d-inline-block text-truncate" style="max-width: 950px;">${categoryId.details.slice(0, 400)}</p>
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex align-items-center">
                                         <img src="${categoryId.author.img ? categoryId.thumbnail_url : 'not Found'}" class="img-fluid rounded-circle" style="max-height: 50px;" alt="...">
                                         <p class="p-2">${categoryId.author.name ? categoryId.author.name : "not found"}</p>
                                    </div>
                                    <div>
                                        <i class="fa-regular fa-eye pt-3"> ${categoryId.total_view ? categoryId.total_view : "No viewer"}</i>
                                        
                                    </div>
                                    <div>
                                    <button class="btn btn-primary pt-2">Details</button>

                                    </div>
                                </div>
                               
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