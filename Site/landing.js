$(function(){
    $("#navbar-container").load("heading.html")
});

const articles = [
    { title: "Friday Night Lights Shine Bright in Flagstaff", img: "/Resources/Sports/football.webp", link: "sports-article1.html" },
    { title: "Local Entrepreneurs Drive Innovation in Flagstaff’s Growing Tech Scene", img: "/Resources/Business/business.webp", link: "business-article1.html" },
    { title: "Residents Embrace New Initiatives for Healthy Living", img: "/Resources/Health/health.jpeg", link: "health-article1.html" },
    { title: "Stargazers Gather for Night Under the Northern Arizona Skies", img: "/Resources/Culture/observatory.jpg", link: "culture-article1.html" },
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
                <a href="${article.link}" class="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    `;
    container.appendChild(div);
});
