<?php

    $postbody = json_decode(file_get_contents('php://input'), true);

    $u_Idx  = $postbody["u_Idx"];
    $q_Idx  = $postbody["q_Idx"];
    
    // $language  = $postbody["language"];

    $connection = new mysqli("localhost", "test", "cc12345688", "codebehavior");
    $connection -> set_charset("UTF8"); // 設定語系避免亂碼

    if ($connection->connect_error) {
        die("連線失敗：" . $connection->connect_error);
    }

    $sqlbehavior = "SELECT * FROM `testbehavior` WHERE (`user_id` = $u_Idx AND `question_index` = $q_Idx)";
    // $sqlCount = "SELECT COUNT(*) FROM `submit` WHERE (`user_id` = $u_Idx AND `question_index` = $q_Idx)";

    # 執行 MySQL/MariaDB 指令
    if ($res = $connection->query($sqlbehavior)) {
        if($res -> num_rows > 0){
            while ($row = $res->fetch_assoc()) {
                $array_behavior[] = $row;
                // printf ($row["user_id"], $row["question_index"], $row["user_id"], $row["line_index"], $row["text"], $row["time"], $row["copy"], $row["cut"], $row["paste"], $row["undoTime"], $row["redoTime"], $row["backspaceTime"], $row["deleteTime"]);
            }
        printf(json_encode($array_behavior));
        }
    } else {
        echo "執行失敗：" . $connection->error;
    }



    // if ($res = $connection->query($sqlbehavior)) {
    //     while ($row = $result->fetch_assoc()) {
    //         printf ($row["user_id"], $row["question_index"], $row["user_id"], $row["line_index"], $row["text"], $row["time"], $row["copy"], $row["cut"], $row["paste"], $row["undoTime"], $row["redoTime"], $row["backspaceTime"], $row["deleteTime"]);
    //     }
        // $array_submit[2] = $row[0]; //user_id
        // $array_submit[3] = $row[1]; //question_index
        // $array_submit[4] = $row[2]; //line_index
        // $array_submit[5] = $row[3]; //text
        // $array_submit[6] = $row[4]; //time
        // $array_submit[7] = $row[5]; //copy
        // $array_submit[8] = $row[6]; //cut
        // $array_submit[9] = $row[7]; //paste
        // $array_submit[10] = $row[8]; //undo
        // $array_submit[11] = $row[9]; //redo
        // $array_submit[12] = $row[10]; //bsTime
        // $array_submit[13] = $row[11]; //delTime
        // print_r(json_encode($array_submit));
         //只能選到一行的sql資料-->合併兩個array?分開兩個sql connect(two php file)?
    // } 
    // else {
    //     echo "執行失敗：" . $connection->error;
    // }

    # 關閉 MySQL/MariaDB 連線
    $connection->close();
?>