<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <form action="index.php" name="testform" id="testform" method="POST">
                    <fieldset>
                        <label for="value">Your first Name:</label>
                        <input type="text" name="firstname" id="firstname">
                        <p></p>
                        <label for="value">Your last Name:</label>
                        <input type="text" name="lastname" id="lastname">
                        <p></p>
                        <label for="value">Your email:</label>
                        <input type="text" name="email" id="email">
                        <p></p>
                        <label for="value">Your address:</label>
                        <input type="text" name="address" id="address">
                        <p></p>
                        <label for="value">city:</label>
                        <input type="text" name="city" id="city">
                        <p></p>
                        <label for="value">state:</label>
                        <input type="text" name="state" id="state">
                        <p></p>
                        <label for="value">Zip Code:</label>
                        <input type="text" name="ZipCode" id="ZipCode">
                        <p></p>
                        <input type="submit" value="Submit">
                    </fieldset>
            </form>
        <?php
            if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            echo "<p>This is a GET request.</p>\n";
                $firstname = $_GET['firstname'];
                $lastname = $_GET['lastname'];
                $email = $_GET['email'];
                $address = $_GET['address'];
                $city = $_GET['city'];
                $state = $_GET['state'];
                $ZipCode = $_GET['ZipCode'];
            }
            else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            echo "<p>This is a POST request.</p>\n";
                $firstname = $_POST['firstname'];
                $lastname = $_POST['lastname'];
                $email = $_POST['email'];
                $address = $_POST['address'];
                $city = $_POST['city'];
                $state = $_POST['state'];
                $ZipCode = $_POST['ZipCode'];
            }
            echo "<p>Your first name is: $firstname</p>\n";
            echo "<p>Your last name is: $lastname</p>\n";
            echo "<p>Your email is: $email</p>\n";
            echo "<p>Your address is: $address</p>\n";
            echo "<p>Your City is: $city</p>\n";
            echo "<p>Your State is: $state</p>\n";
            echo "<p>Your Zip Code is: $ZipCode</p>\n";
        ?>
    </body>
</html>
