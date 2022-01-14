 function getCurrentTabUrl(callback) {
    var queryInfo = {
      active: true,
      currentWindow: true
    };
  
    chrome.tabs.query(queryInfo, function(tabs) {
      var tab = tabs[0];
  
      var url = tab.url;
  
      console.assert(typeof url == 'string', 'tab.url should be a string');
  
      callback(url);
    });
  }
  
  function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
  }
  
  function getQRCodeURL(qrcodeurl) {
    document.getElementById('image-result').src = qrcodeurl + "";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    getCurrentTabUrl(function(url) {
      // Put image URL in Google search.
      renderStatus(url);
      var someURL = 'http://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=L&chl=' + url;
      getQRCodeURL(someURL);
  
    });
  });