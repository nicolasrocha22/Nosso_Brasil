<?php

ini_set("display_errors", 0);

$feedback -> option = $_GET['customRadio'];
$feedback -> browser = $_GET['option'];
$feedback -> comentary = $_GET['comentary'];

$feedback = json_encode($feedback);
file_put_contents('feedback.json', $feedback);

?>