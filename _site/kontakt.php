<?php
//definicja zmiennych z formularza
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$message = $_POST['message'];
//zdefiniowanie adresu docelowego i tytulu
$dokogo = "lewandowski.d90@gmail.com";
$tytul = "Wiadomość ze strony www.damianlewandowski.pl";
// jak będzie wyglądał mail u mnie
$wiadomosc = "";
$wiadomosc .= "Imię i nazwisko: " . $name . " " . $lastname . "\n";
$wiadomosc .= "E-mail: " . $email . "\n";
$wiadomosc .= "Treść wiadomości: " . $message . "\n";
//wysłanie
$sukces = mail($dokogo, $tytul, $wiadomosc, "od: <$email");
?>

<?php
header("location: http://www.damianlewandowski.pl")
?>