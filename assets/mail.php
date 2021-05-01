<?php

if ( isset( $_POST['sndmsg'] ) ) {
    $to = 'foyz.freelance@gmail.com';
    $mail_sub = 'Mail for project discussion';

    $user_name = $_POST['username'];
    $user_email = $_POST['useremail'];
    $user_address = $_POST['useraddress'];
    $user_txt = $_POST['usertxt'];

    $mail_text = 'Name:' . $user_name . '<br>' . 'Email:' . $user_email . '<br>' . 'Address:' . $user_address . '<br>' . 'Message:' . $user_txt;

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= 'From: Foyzullah.com' . $user_email . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    mail( $to, $mail_sub, $mail_text, $headers );
}

echo '<script>alert("Email sent success")</script>';
?>
