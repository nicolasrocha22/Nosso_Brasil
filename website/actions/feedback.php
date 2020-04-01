<?php

ini_set("display_errors", 0);

$feedback -> option = $_GET['customRadio'];
$feedback -> browser = $_GET['option'];
$feedback -> comentary = $_GET['comentary'];

if(file_exists('./feedback')) {
    chdir("./feedback");
} else {
    mkdir('./feedback', 0777, true);
    chdir("./feedback");
}

$directory = getcwd()."/";
$file_counter = 0;
$files = glob($directory ."*");

if($files) {
    $file_counter = count($files);
}

for($counter = 0; $counter <= $file_counter + 1; $counter++) {
    $feedbackfile = "feedback$counter.json";
}

fopen($feedbackfile, "w");

$feedback = json_encode($feedback);
file_put_contents($feedback_file, $feedback);

chdir("..");

?>