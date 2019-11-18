const staticAssets = [
    './',
    './style.css',
    './app.js'
];

// sw.js首次被注册时候触发
self.addEventListener('install', async event => {
    const cache = await caches.open('news-static');
    cache.addAll(staticAssets);
})
