console.log("popup.js loaded");

document.addEventListener("DOMContentLoaded", function() {
  var usServerButton = document.getElementById("us-server");
  var euServerButton = document.getElementById("eu-server");
  var websiteButton = document.getElementById("website");
  var forumButton = document.getElementById("forum");

  if (usServerButton) {
    usServerButton.addEventListener("click", function() {
      chrome.tabs.create({url: "https://cfx.re/join/45yo89"});
      window.close(); // close the extension window
    });
  }

  if (euServerButton) {
    euServerButton.addEventListener("click", function() {
      chrome.tabs.create({url: "https://www.megasgames.com"});
      window.close(); // close the extension window
    });
  }

  if (websiteButton) {
    websiteButton.addEventListener("click", function() {
      chrome.tabs.create({url: "https://www.megasgames.com"});
      window.close(); // close the extension window
    });
  }

  if (forumButton) {
    forumButton.addEventListener("click", function() {
      chrome.tabs.create({url: "https://forums.megasgames.com"});
      window.close(); // close the extension window
    });
  }
});


