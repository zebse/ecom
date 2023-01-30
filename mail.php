<?php
//check all the fields and email is valid
$errors = '';
$myemail = 'youngict2014@gmail.com'; //<-----Put Your email address here.
if (
    empty($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['subject']) ||
    empty($_POST['message'])
) {
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if (
    !preg_match(
        "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
        $email_address
    )
) {
    $errors .= "\n Error: Invalid email address";
}
//compose email to send
if (isset($_POST['submit'])) {
    $to = "youngict2014@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mssg = $_POST['message'];
    $subject = $_POST['subject'];
    $subject2 = "Copy of your form submission";
    $message = $name . " " . $subject . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to, $subject, $message, $headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    //echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    echo ("<script LANGUAGE='JavaScript'>
            window.alert('Thank you' .$name. 'We eill contact you shortly!');
            window.location.href='http://localhost:3000/index.html';
            </script>");
}
?>