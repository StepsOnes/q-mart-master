<?php 
require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$_POST = json_decode(file_get_contents('php://input'), true);
// PopUp Form_01
$name = $_POST["footer_name"];
$phone = $_POST["footer_phone"];
$email = $_POST["footer_email"];
$city = $_POST["footer_city"];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'o-zagudaev@mail.ru';     // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'rCc3FYSNwRKDDx7rmYEL';   // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; 
$mail->setFrom('o-zagudaev@mail.ru');            // от кого будет уходить письмо?
$mail->addAddress('Stepan663663@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    
$mail->isHTML(true);                                  // Set email format to HTML

$str = "
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>Title</title>
    <style>
        body{margin: 0; background: #F9FAFC}
        h1{font-family: Arial}
        .container{max-width: 1100px;margin: 0 auto;}
        table.iksweb{text-decoration: none;border-collapse:collapse;width:100%;text-align:center;}
        table.iksweb th{font-weight:normal;font-size:14px; color:#ffffff;background-color:#354251;}
        table.iksweb td{font-size:13px;color:#354251;}
        table.iksweb td,table.iksweb th{white-space:pre-wrap;padding:10px 5px;line-height:13px;vertical-align: middle;border: 1px solid #354251;}    table.iksweb tr:hover{background-color:#f9fafb}
        table.iksweb tr:hover td{color:#354251;cursor:default;}
    </style>
</head>
<body>

<div class='container'>
    <h1>Данные от пользователя с сайта Q-Mart</h1>

    <table class='iksweb'>
        <thead>
        <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Почта</th>
            <th>Город</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>$name</td>
            <td>$phone</td>
            <td>$email</td>
            <td>$city</td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>
";


$mail->Subject = 'Данные пользователя из футера';
$mail->Body = $str;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'success';
}

?>