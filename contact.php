<?php

// Get the form data
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// Send an email
$to = "bolemteja25@gmail.com";
$subject = "Contact form submission";
$message = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

mail($to, $subject, $message);

// Redirect the user to a success page
// header("Location: /contact-success.html");

?>