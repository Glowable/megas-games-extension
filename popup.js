console.log("popup.js loaded");

document.addEventListener("DOMContentLoaded", function() {
  var usServerButton = document.getElementById("us-server");
  var euServerButton = document.getElementById("eu-server");
  var websiteButton = document.getElementById("website");
  var forumButton = document.getElementById("forum");

  usServerButton.addEventListener("click", function() {
    chrome.tabs.update({url: "https://cfx.re/join/45yo89"});
    window.close(); // close the extension window
  });

  euServerButton.addEventListener("click", function() {
    chrome.tabs.update({url: "https://www.megasgames.com"});
    window.close(); // close the extension window
  });

  websiteButton.addEventListener("click", function() {
    chrome.tabs.update({url: "https://www.megasgames.com"});
    window.close(); // close the extension window
  });

  forumButton.addEventListener("click", function() {
    chrome.tabs.update({url: "https://forums.megasgames.com"});
    window.close(); // close the extension window
  });
});


