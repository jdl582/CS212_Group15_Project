$(function(){
    $("#navbar-container").load("heading.html")
});

const articles = [
    { title: "Breaking News: Headline 1", img: "https://via.placeholder.com/300x200" },
    { title: "Breaking News: Headline 2", img: "https://via.placeholder.com/300x200" },
    { title: "Breaking News: Headline 3", img: "https://via.placeholder.com/300x200" },
    { title: "Breaking News: Headline 4", img: "https://via.placeholder.com/300x200" },
];

const container = document.getElementById("more-articles");

articles.forEach(article => {
    const div = document.createElement("div");
    div.className = "col-md-3 mb-4";
    div.innerHTML = `
        <div class="card">
            <img src="${article.img}" class="card-img-top" alt="${article.title}">
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <a href="#" class="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    `;
    container.appendChild(div);
});