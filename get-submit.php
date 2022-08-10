<?php

// $link = mysqli_connect("localhost", "test", "cc12345688", "codebehavior");
// $link -> set_charset("UTF8"); // 設定語系避免亂碼

$postbody = json_decode(file_get_contents('php://input'), true);

// var_dump($postbody);

$u_Idx  = $postbody["u_Idx"];
$q_Idx  = $postbody["q_Idx"];
$language  = $postbody["language"];
$lineCount  = $postbody["lineCount"];
$wordCount  = $postbody["wordCount"];
$totalTime  = $postbody["totalTime"];
// $result  = $postbody["result"];
$runCode  = $postbody["runCode"];
$mousePosition  = $postbody["mouse_position"];
$tab_chart = $postbody["tab_chart"];
$code  = $postbody["code"];

// // $sql = "INSERT INTO `submit`(`user_id`, `question_index`, `language`, `lineCount`, `wordCount`, `totalTime`, `result`, `runcode`) VALUES ('?','?','?','?','?','?','?','?')";
// $final = mysqli_query($link, $sql);
// echo($final);

// // $stmt = $link->prepare($sql) or die("Failed Execution");
// // $stmt->bind_param('iisiisii', $u_Idx, $q_Idx, $language, $lineCount, $wordCount, $totalTime, $result, $runCode);

// // $stmt->execute();
// // echo $final;

$connection = new mysqli("localhost", "test", "cc12345688", "codebehavior");
$connection -> set_charset("UTF8"); // 設定語系避免亂碼

if ($connection->connect_error) {
    die("連線失敗：" . $connection->connect_error);
}
$sqlInsert = "INSERT INTO `submit`(`user_id`, `question_index`, `language`, `lineCount`, `wordCount`, `totalTime`, `runcode`, `mouse_position`, `tab_chart`, `code`) VALUES ($u_Idx, $q_Idx, '$language', $lineCount, $wordCount, '$totalTime', $runCode, '$mousePosition', '$tab_chart', '$code')";
$sqlUpdate = "UPDATE `submit` SET `user_id` = $u_Idx, `question_index` = $q_Idx, `language` = '$language', `lineCount` = '$lineCount', `wordCount` = '$wordCount', `totalTime` = '$totalTime', `runCode` = $runCode, `mouse_position` = '$mousePosition', `tab_chart` = '$tab_chart', `code` = '$code' WHERE `user_id` = $u_Idx AND `question_index` = $q_Idx";
$sql = "SELECT * FROM `submit` WHERE (`user_id` = $u_Idx AND `question_index` = $q_Idx)";

// $sqlQuery = "INSERT INTO `submit`(`user_id`, `question_index`, `language`, `lineCount`, `wordCount`, `totalTime`, `result`, `runcode`, `mouse_position`, `tab_chart`) VALUES ('$u_Idx', '$q_Idx', '$language', '$lineCount', '$wordCount', '$totalTime', '$result', '$runCode', `$mousePosition`, `$tab_chart`)";
$sqlDelete = "DELETE FROM `testbehavior` WHERE (`user_id` = $u_Idx AND `question_index` = $q_Idx AND `line_index` > $lineCount)";


# 執行 MySQL/MariaDB 指令

if ($res = $connection->query($sql)) {
    # 若有 AUTO_INCREMENT 的 ID 欄位，可直接取得此筆資料的 ID
      if($res->fetch_row() > 0) { //exist
          if($connection->query($sqlUpdate) === TRUE) {
            if($connection->query($sqlDelete) === TRUE) {
                echo "更新submit資料 & testbehavior刪除成功/n";
            }
            else {
                echo "testbehavior刪除失敗/n";
            }
          }
          else {
              echo "更新submit資料". $connection->error;
          }
      }
      else { // not exist
          if($connection->query($sqlInsert) === TRUE) {
              echo "新增submit資料成功";
          }
          else {
              echo "新增submit資料失敗". $connection->error;
          }
      }
  } else {
    echo "執行失敗：" . $connection->error;
  }

# 關閉 MySQL/MariaDB 連線
$connection->close();


?>


