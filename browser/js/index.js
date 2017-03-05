var webview = document.querySelector('webview');
var bar = document.querySelector('#foot');
var addressBar = document.querySelector('#addr');
var homeButton = document.querySelector('#home');

var homeUrl = 'file://'

webview.addEventListener('did-change-theme-color',function(themeColor){
  bar.style.backgroundColor = themeColor;
});

webview.addEventListener('did-navigate',function(e){
  setUrl(e.url);
})

webview.addEventListener('did-navigate-in-page',function(e){
  setUrl(e.url);
})

function setUrl(u){
  addressBar.value = u;
}

function navigateTo(url){
  webview.src = url;
  setUrl(url);
}

homeButton.addEventListener('click',function(e){
  navigateTo(homeUrl);
})
