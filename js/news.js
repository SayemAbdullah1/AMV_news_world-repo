
document.getElementById('spinner').style.display = 'none';
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
        <p class="d-flex flex-wrap" onclick="CategoryId('${category.category_id ? category.category_id : "No data found"}')">${category.category_name}</p>
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
    // totalLength.forEach(perLength => {
        //     totalItems.innerHTML = `
        //     <p>${Object.keys(perLength.category_id).length} </p>
        // `;
        categoriesId.sort((a, b) => b.total_view - a.total_view);
        
        categoriesId.forEach((e) => {
            console.log(`${e.total_view}`);
        });
        // });
        const categoryContainer = document.getElementById('news-section')
        
        categoryContainer.innerText = '';
        
        categoriesId.forEach(categoryId => {
            console.log(categoryId)
            
            document.getElementById('spinner').style.display = 'block';
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
            <p class="card-text " style="  display: -webkit-box;
            max-width: 650px;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;">${categoryId.details.slice(0, 400)}</p>
            <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
            <img src="${categoryId.author.img ? categoryId.thumbnail_url : 'not Found'}" class="img-fluid rounded-circle" style="max-height: 50px;" alt="...">
            <p class="p-2">${categoryId.author.name ? categoryId.author.name : "not found"}</p>
            </div>
            <div>
            <i class="fa-regular fa-eye pt-3"> ${categoryId.total_view ? categoryId.total_view : "No viewer"}</i>
            
            </div>
            <div>
            <button onclick="NewsModal('{singlenews.title}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">
            show details
            </button>
            
            `;
            categoryContainer.appendChild(newCategory)
            
            
            
        });
        document.getElementById('spinner').style.display = 'none';
    }

const NewsModal = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsDetails(data.data[0]))
}

const displayNewsDetails = NewsId => {
    // console.log(categoryId)
    const modalTitle = document.getElementById('newsModalLabel')
    NewsId.forEach(singlenews => {
        console.log(singlenews)
    });
    // modalTitle.innerText = categoryId.title;

    // const phoneDetails = document.getElementById('phone-details')

    // phoneDetails.innerHTML = `
    // <p><b>Release Date</b>: ${phone.releaseDate ? phone.releaseDate : 'No release date found'}</p>
    // <p><b>Bluetooth</b>: ${phone.others ? phone.others.Bluetooth : 'No bluetooth details found.'} </p>
    // <p><b>Storage</b>: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No storage details found.'} </p>
    

    // `;

}


loadNews()