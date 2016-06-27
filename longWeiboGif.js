var page = require('webpage').create();
page.open('https://www.google.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.gif', {format: 'gif'}); // Note there is no such thing as 'quality' with a gif
  }
  phantom.exit();
});