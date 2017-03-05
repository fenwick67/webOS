const fs = require('fs');
const url = require('url');
const path = require('path');

var webview = document.querySelector('webview');
var bar = document.querySelector('#foot');
var addressBar = document.querySelector('#addr');
var homeButton = document.querySelector('#home');
var backButton = document.querySelector('#back');


var homeUrl = 'my://home'

webview.addEventListener('did-change-theme-color',function(e){
  bar.style.backgroundColor = e.themeColor;
});

webview.addEventListener('did-navigate',function(e){
  showUrl(e.url);
});
webview.addEventListener('did-navigate-in-page',function(e){
  showUrl(e.url);
});

function showUrl(u){
  var p = url.parse(u);
  if (p.protocol == 'file:'){ // deal with file:// redirects
    return;
  }
  addressBar.value = u;
}

function navigateTo(u){
  var actual = normalizeUrl(u);
  webview.src = actual;
  showUrl(u);
}

backButton.addEventListener('click',function(e){
  webview.goBack();
});

homeButton.addEventListener('click',function(e){
  navigateTo(homeUrl);
})

addressBar.addEventListener('keyup',function(e){
  if (e.key == 'Enter'){
    navigateTo(addressBar.value);
  }
});

function normalizeUrl(u){
  // my://home => file://(webOs)/pages/home.html
  // rel://something.txt =>file://(webOs)/a.txt
  // google.com => http://google.com
  var p = url.parse(u);
  if (p.protocol == null){// change to http
    p.protocol = 'http';
    p.slashes = true;
    return url.format(p);
  }
  else if (p.protocol == "my:"){
    //resolve to filename
    var s = path.join(__dirname,'../pages',p.hostname);
    return 'file://'+s+'.html';
  }
  else if (p.protocol == "rel:"){
    //resolve to filename
    var s = path.join(__dirname,p.hostname);
    return 'file://'+s;
  }
  else{
    return u;
  }
}

//on load
navigateTo(homeUrl);
