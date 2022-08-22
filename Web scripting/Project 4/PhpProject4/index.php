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
        
        <?php
        $cURL =curl_init();
        $url = "http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/";
        curl_setop($cURl, CURLOPT_URL, $url);
        curl_setop($cURL, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($cURL); 
        curl_close($cURL);
        $json = json_decode($output, true); 
        foreach ($json as $key => $vaule){
            echo "$key: ". var_export($vaule,true) ."<br/>";
        }
        echo "</p><p>";
        $jsonString = json_encode($json);
        echo $jsonString;
        echo "</p>";
        
        ?>
    </body>
</html>
