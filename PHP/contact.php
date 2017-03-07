<?php
// 
 require_once 'PHPMailer/PHPMailerAutoload.php'; 
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Aucun argument fourni!";
	return false;
   }
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth   = true;                  
    $mail->SMTPSecure = "tls";                
    $mail->Host       = "smtp.gmail.com";      // gmail smtp
    $mail->Username = GUSER;  
	$mail->Password = GPWD;    
 
    $mail->From = $_POST['email'];
    $mail->FromName = $_POST['name'];
    $mail->AddAddress("njarasolofo@gmail.com"); //destinataire
    $mail->Subject = $_POST['email'];
    $mail->Body = "Nom : " . $_POST['name'] . "\r\n\r\nMessage: " . stripslashes($_POST['message']);
 
    if(!$mail->send()) {
      echo $mail->ErrorInfo;
     exit;
    
    }
    return true;
			
?>