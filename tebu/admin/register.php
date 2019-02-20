<?php
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    var_dump($json);
    $username = $json -> username;
    $pwd = $json -> pwd;
    $coon = new Mysqli("localhost", "root","","db_shop_admin",3306)
    $sql ="INSERT INTO `user_info` (username,password) VALUES ('$username','$pwd')";
    $coon->query("SET CHARACTER SET 'utf8'");
    $coon->query("SET NAMES 'utf8'");
    $result = $coon->query($sql);
    if($result){
        //注册成功
        $arr = array("code"=>"200","msg"=>"");
        // echo "注册成功";
    }else{
        //注册失败
        $arr = array("code"=>"1000","msg"=>"注册失败");
        // echo "注册失败";
    }
    echo json_encode($arr);
?>