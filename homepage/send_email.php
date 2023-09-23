<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "hello@kayibank.africa"; // Replace with the recipient's email address
    $subject = $_POST["subject"];

    $name = $_POST["name"];
    $email = $_POST["email"];
    $phonenumber = $_POST["phonenumber"];
    $message = $_POST["message"];

    // Construct the email content
    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Phone number: $phonenumber\n";
    $emailContent .= "Message:\n$message";

    // Send the email
    if (mail($to, $subject, $emailContent)) {
        echo "Email sent successfully.";
    } else {
        echo "Email delivery failed.";
    }
} else {
    // Handle cases where the form was not submitted
    echo "Form not submitted.";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    please wait....
</body>
</html>