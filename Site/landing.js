$(function() {
    $("#navbar-container").load("heading.html", function() {

        const searchBar = document.getElementById("searchBar");
        const suggestionsList = document.getElementById("searchSuggestions");

    const articleLibrary = [
        {
            title: "Flagstaff Tech Startups Gain Momentum in Northern Arizona",
            url: "business-article1.html" ,
            category: "Business"
        },
        {
            title: "Small Businesses Bring Energy Back to Historic Downtown",
            url: "business-article2.html" ,
            category: "Business"
        },
        {
            title: "Flagstaff Entrepreneurs Lead the Way in Eco-Friendly Practices",
            url: "business-article3.html" ,
            category: "Business"
        },
        {
            title: "Visitors Fuel Growth for Hotels, Restaurants, and Shops",
            url: "business-article4.html" ,
            category: "Business"
        },
        {
            title: "Breweries and Distilleries Pour Success into Local Economy",
            url: "business-article5.html" ,
            category: "Business"
        },
        {
            title: "Local Shops Embrace E-Commerce and Customer Engagement",
            url: "business-article6.html" ,
            category: "Business"
        },
        {
            title: "Local Industry Creates Jobs and Supports Regional Economy",
            url: "business-article7.html" ,
            category: "Business"
        },
        {
            title: "Demand for Homes and Commercial Spaces Drives Growth",
            url: "business-article8.html" ,
            category: "Business"
        },
        {
            title: "Mentorship and Resources Help Small Businesses Thrive",
            url: "business-article9.html" ,
            category: "Business"
        },
        // Culture
        {
            title: "Stargazers Gather for Night Under the Northern Arizona Skies",
            url: "culture-article1.html" ,
            category: "Culture"
        },
        {
            title: "Community Enjoys Visual Arts, Music, and Performances",
            url: "culture-article2.html" ,
            category: "Culture"
        },
        {
            title: "Community Explores Native American Culture Through Art",
            url: "culture-article3.html" ,
            category: "Culture"
        },
        {
            title: "Independent Filmmakers Shine on the Mountain Stage",
            url: "culture-article4.html" ,
            category: "Culture"
        },
        {
            title: "Community Honors Native Heritage and Traditions",
            url: "culture-article5.html" ,
            category: "Culture"
        },
        {
            title: "Local Artisans Showcase Handmade Goods",
            url: "culture-article6.html" ,
            category: "Culture"
        },
        {
            title: "Community Honors Traditions with Altars, Music, and Food",
            url: "culture-article7.html" ,
            category: "Culture"
        },
        {
            title: "Community Enjoys Original Storytelling on Stage",
            url: "culture-article8.html" ,
            category: "Culture"
        },
        {
            title: "Community Gathers for Summer Concerts Under the Stars",
            url: "culture-article9.html" ,
            category: "Culture"
        },
        // Health
        {
            title: "Residents Embrace New Initiatives for Healthy Living",
            url: "health-article1.html" ,
            category: "Health"
        },
        {
            title: "Expanded Programs Provide Support Across the City",
            url: "health-article2.html" ,
            category: "Health"
        },
        {
            title: "Flagstaff Residents Encouraged to Prioritize Routine Health Checks",
            url: "health-article3.html" ,
            category: "Health"
        },
        {
            title: "Outdoor Exercise Opportunities Boost Community Health",
            url: "health-article4.html" ,
            category: "Health"
        },
        {
            title: "Community Learns to Make Nutritious Choices",
            url: "health-article5.html" ,
            category: "Health"
        },
        {
            title: "Virtual Care Offers Convenience and Support for Patients",
            url: "health-article6.html" ,
            category: "Health"
        },
        {
            title: "Community Comes Together to Explore Health Resources",
            url: "health-article7.html" ,
            category: "Health"
        },
        {
            title: "Students Learn About Nutrition, Exercise, and Mental Well-Being",
            url: "health-article8.html" ,
            category: "Health"
        },
        {
            title: "Flagstaff Senior Centers Focus on Active Aging",
            url: "health-article9.html" ,
            category: "Health"
        },
        // Sports
        {
            title: "Friday Night Lights Shine Bright in Flagstaff",
            url: "sports-article1.html" ,
            category: "Sports"
        },
        {
            title: "Rivalry Returns as Flagstaff High and Coconino Clash Under the Lights",
            url: "sports-article2.html" ,
            category: "Sports"
        },
        {
            title: "NAU Fires Up the Crowd in Dominant Season Opener",
            url: "sports-article3.html" ,
            category: "Sports"
        },
        {
            title: "Young Athletes Score Big in Northern Arizona Football Programs",
            url: "sports-article4.html" ,
            category: "Sports"
        },
        {
            title: "Community Spirit Shines in Flagstaff’s Weekend Sports Action",
            url: "sports-article5.html" ,
            category: "Sports"
        },
        {
            title: "Lumberjacks Set the Tone With Powerful Defensive Performance",
            url: "sports-article6.html" ,
            category: "Sports"
        },
        {
            title: "Record Turnout for Flagstaff’s Annual Mountain Town Marathon",
            url: "sports-article7.html" ,
            category: "Sports"
        },
        {
            title: "Flagstaff Hosts Exciting High-Altitude Soccer Showcase",
            url: "sports-article8.html" ,
            category: "Sports"
        },
        {
            title: "Buffalo Park Hosts Thrilling Weekend for Runners and Cyclists",
            url: "sports-article9.html" ,
            category: "Sports"
        },
        ];

        searchBar.addEventListener("input", () => {
            const query = searchBar.value.toLowerCase();
            suggestionsList.innerHTML = "";

            if (query) {
                const filtered = articleLibrary.filter(article =>
                    article.title.toLowerCase().includes(query)
                );

                filtered.forEach(article => {
                    const li = document.createElement("li");
                    li.textContent = article.title;
                    li.addEventListener("click", () => {
                        window.location.href = article.url;
                    });
                    suggestionsList.appendChild(li);
                });

                suggestionsList.style.display = filtered.length ? "block" : "none";
            } else {
                suggestionsList.style.display = "none";
            }
        });

        document.addEventListener("click", (e) => {
            if (!searchBar.contains(e.target) && !suggestionsList.contains(e.target)) {
                suggestionsList.style.display = "none";
            }
        });

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

});