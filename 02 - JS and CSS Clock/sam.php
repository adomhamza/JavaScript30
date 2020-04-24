<?php
function new_date(){ 
   // $t = time();
    $seconds = gmdate("s");
    $seconds_to_degree = (($seconds/60)*360+90);  
    $document = new DOMdocument();
    $second_hand = $document -> querySelector('.secon-hand');
	echo 1 + 2;
}
add_numbers ();
?>