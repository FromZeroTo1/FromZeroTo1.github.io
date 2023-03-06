<?php 
    $base = mysqli_connect('localhost','root','','shop');
    if(isset($_POST['submit'])){
		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$email = $_POST['email'];
		$tel = $_POST['tel'];
        $massage = $_POST['massage'];
		$query = "INSERT INTO `posts`(name,image,price,description) VALUES ('$name','$img','$price','$description')";
		mysqli_query($base, $query);
	}
?>