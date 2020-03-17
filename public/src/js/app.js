//add the register worker

//check if service worker ,navigator is your browser
if('serviceWorker' in navigator){
navigator.serviceWorker
//we register a new service worker and define the path to that SW
//register return a promise 
.register('/sw.js')
.then(function(){
console.log("service worker registered")

});

}
