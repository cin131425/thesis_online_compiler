<?php


$postbody = json_decode(file_get_contents('php://input'), true);
// print_r($postbody);
// var_dump($postbody);

    $u_Idx  = $postbody["u_Idx"];
    $q_Idx  = $postbody["q_Idx"];
    $line_Idx  = $postbody["line_Idx"];
    $code_text  = $postbody["text"];
    $codingTime  = $postbody["time"];
    $copyTime  = $postbody["copy"];
    $cutTime  = $postbody["cut"];
    $pasteTime  = $postbody["paste"];
    $undoTime  = $postbody["undoTime"];
    $redoTime  = $postbody["redoTime"];
    $bsTime  = $postbody["bsTime"];
    $delTime  = $postbody["delTime"];

    $connection = new mysqli("localhost", "test", "cc12345688", "codebehavior");
    $connection -> set_charset("UTF8"); // 設定語系避免亂碼

    if ($connection->connect_error) {
        die("連線失敗：" . $connection->connect_error);
    }

    $sqlInsert = "INSERT INTO `testbehavior`(`user_id`, `question_index`, `line_index`, `text`, `time`, `copy`, `cut`, `paste`, `undoTime`, `redoTime`, `backspaceTime`, `deleteTime`) VALUES ($u_Idx, $q_Idx, $line_Idx, '$code_text', '$codingTime', $copyTime, $cutTime, $pasteTime, $undoTime, $redoTime, $bsTime, $delTime)";  
    $sqlUpdate = "UPDATE `testbehavior` SET `user_id` = $u_Idx, `question_index` = $q_Idx, `line_index` = $line_Idx, `text` = '$code_text', `time` = '$codingTime', `copy` = $copyTime, `cut` = $cutTime, `paste` = $pasteTime, `undoTime` = $undoTime, `redoTime` = $redoTime, `backspaceTime` = $bsTime, `deleteTime` = $delTime WHERE `user_id` = $u_Idx AND `question_index` = $q_Idx AND `line_index` = $line_Idx";

    $sqlCount = "SELECT COUNT(*) FROM `testbehavior` WHERE (`user_id` = $u_Idx AND `question_index` = $q_Idx AND `line_index` = $line_Idx)";
    $sql = "SELECT * FROM `testbehavior` WHERE (`user_id` = $u_Idx AND `question_index` = $q_Idx AND `line_index` = $line_Idx)";


    # 執行 MySQL/MariaDB 指令
    if ($res = $connection->query($sql)) {
      # 若有 AUTO_INCREMENT 的 ID 欄位，可直接取得此筆資料的 ID
        if($res->fetch_row() > 0) { //exist
            if($connection->query($sqlUpdate) === TRUE) {
                echo "更新testbehavior資料成功";
            }
            else {
                echo "更新testbehavior資料失敗". $connection->error;
            }
        }
        else { // not exist
            if($connection->query($sqlInsert) === TRUE) {
                echo "新增testbehavior資料成功";
            }
            else {
                echo "新增testbehavior資料失敗". $connection->error;
            }
        }
    } else {
      echo "執行失敗：" . $connection->error;
    }
    
    # 關閉 MySQL/MariaDB 連線
    $connection->close();
?>