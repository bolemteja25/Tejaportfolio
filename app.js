// This function validates the form data
function isValid() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  
  if (name == "" || email == "" || subject == "" || message == "") {
  alert("Please fill out all of the fields.");
  return false;
  }
  
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/)) {
  alert("Please enter a valid email address.");
  return false;
  }
  
  return true;
  }
  
  // This function is called when the form is submitted
  document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (!isValid()) {
  return;
  }
  
  // Send the form data to the server
  var data = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  subject: document.getElementById("subject").value,
  message: document.getElementById("message").value
  };
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/contact.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  
  xhr.onload = function() {
  if (xhr.status == 200) {
  alert("Your message has been sent.");
  } else {
  alert("There was an error sending your message.");
  }
  };
  });