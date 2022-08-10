<?php

    $postbody = json_decode(file_get_contents('php://input'), true);

    $u_Idx  = $postbody["u_Idx"];
    $q_Idx  = $postbody["q_Idx"];
    $language  = $postbody["language"];
    

    $connection = new mysqli("localhost", "test", "cc12345688", "codebehavior");
    $connection -> set_charset("UTF8"); // 設定語系避免亂碼

    if ($connection->connect_error) {
        die("連線失敗：" . $connection->connect_error);
    }

    $sql = "SELECT `totalTime`,`code` FROM `submit` WHERE (`user_id` = $u_Idx AND `question_index` = $q_Idx)";

    # 執行 MySQL/MariaDB 指令
    
    if ($res = $connection->query($sql)) {
        if($row = $res->fetch_row()) {
            $array_submit[0] = $row[0];
            $array_submit[1] = $row[1];
            print_r(json_encode($array_submit));
            // echo $row[1];
        }
    } else {
        echo "執行失敗：" . $connection->error;
    }
    # 關閉 MySQL/MariaDB 連線
    $connection->close();
?>