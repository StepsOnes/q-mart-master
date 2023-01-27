<?php 
require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$_POST = json_decode(file_get_contents('php://input'), true);
// PopUp Form_01
$name = $_POST["popup_name-04"];
$phone = $_POST["popup_phone-04"];
$email = $_POST["popup_email-04"];

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



$mail->Subject = 'Заявка с тестового сайта';
$mail->Body = 'name';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'success';
}

?>