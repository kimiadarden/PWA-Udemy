//add event listener
//install event get fired when the browswr install the SW
self.addEventListener('install',function(event){
console.log("[service worker] Installing Service Worker" ,event)
})

//this is fired when the SW not just installed but ACTIVATED
self.addEventListener('activate',function(event){

    console.log("[service worker] Activating Service Worker", event)

    //the SW is loaded and activated correctly
    // return self.Clients.claim();
    })

    //fetch will then get triggered when our application fetch somthing
self.addEventListener('fetch', function(event){
    console.log("[service worker] Fetching something", event);

    //allows us to overwrite the data which gets send back
    //think of service worker as network proxy
    event.respondWith(fetch(event.request));
})   