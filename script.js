if ('serviceWorker' in navigator) {
       navigator.serviceWorker.register('/text-thingy/sw.js').then(() => {
         console.log('service worker do be working');
       });
     }