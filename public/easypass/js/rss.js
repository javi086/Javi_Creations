document.addEventListener('DOMContentLoaded', () => {
    fetchRSSNews();
});

async function fetchRSSNews() {

    let container = document.querySelector('#rss-container');
    if (container) {
        try {
            const response = await fetch('/api/easypassword/news');// 1. Using Fetch to send the request to my Next.js API endpoint
            
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Server Error:", errorData.error || response.statusText);
                container.innerHTML = `<p class='text-zinc-500 text-xs'>Error loading news: ${errorData.error || 'Unknown error'}.</p>`;
                return;
            }
            const newsItems = await response.json(); // Getting the response and converting it to JSON

            
            let   newsHTML = `
            <div class="flex items-center">
                <span class="inline-block px-6 mx-5 bg-red-600/10 border border-red-600/30 rounded-full text-red-600 text-xl font-bold uppercase tracking-widest">RSS</span>
                <h3 class="inline-block  text-red-600 font-bold uppercase text-xs">Latest Tech News</h3>
            </div>
            `;

            if (newsItems.length === 0) {
                newsHTML += `<p class='text-zinc-500 text-xs mt-4'>No news items found.</p>`;
            } else {
                newsItems.forEach(item => {
                    newsHTML += `
                   <div class="border-b border-zinc-800 py-4">
                        <h4 class="text-white font-bold text-sm">
                            <a href="${item.link}" target="_blank" class="hover:text-red-500 transition-colors">
                                ${item.title}
                            </a>
                        </h4>
                        <p class="text-zinc-500 text-[10px] mt-1">${new Date(item.date).toLocaleDateString()}</p>
                    </div>
                `;
                });
            }

            container.innerHTML = newsHTML;

        }
        catch (error) {
            console.error("Fetch error:", error);
            container.innerHTML = "<p class='text-zinc-500 text-xs'>Unable to load news.</p>";
        }
    }
}