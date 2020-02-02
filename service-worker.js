// service-worker.js
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
  });
  
  self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
  });
  
  self.addEventListener('fetch', function(event) {});

  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(keys => {
        console.log('keys: ' + keys)
        return Promise.all(
          keys.map(key => {
            console.log('不要なキャッシュを削除')
            return caches.delete(key)
          })
        )
      })
    )
  })
  
  window.location.reload(true);