const apiKey = 'fa35a325ddfa4c4798102ebb76809bbb';
const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelector');
const defaultSource = 'techcrunch'

// 页面加载后执行逻辑
window.addEventListener('load', async e => {
    // 新闻
    updateNews();
    // 选择框
    await updateSources();
    sourceSelector.value = defaultSource;

    sourceSelector.addEventListener('change', e => {
        updateNews(e.target.value);
    });

    // 判断浏览器是否支持serviceWorker
    // 关键性代码
    if ('serviceWorker' in navigator) {
        try {
            // 尝试注册serviceWorker到sw.js文件中
            navigator.serviceWorker.register('./sw.js');
            console.log('SW registered');
        } catch (error) {
            console.log('SW reg failed');
        }
    }
});

// 获取新闻来源
async function updateSources() {
    const res = await fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);
    const json = await res.json();

    sourceSelector.innerHTML = json.sources
        .map(src => `<option value="${src.id}">${src.name}</option>`)
        .join('\n');
}

// 根据来源获取新闻数据
async function updateNews(source = defaultSource) {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`);
    const json = await res.json();

    main.innerHTML = json.articles.map(createArticle).join('\n');
}

// 创建文章
function createArticle(article) {
    return `
        <div class="article">
            <a href="${article.url}">
                <h2>${article.title}</h2>
            </a>
            <img src="${article.urlToImage}" />
            <p>${article.description}</p>
        </div>
    `;
}
