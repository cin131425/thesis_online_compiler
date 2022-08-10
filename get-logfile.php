<?php

$postbody = json_decode(file_get_contents('php://input'), true);
// print_r($postbody);

$u_Idx  = $postbody["u_Idx"];
$q_Idx  = $postbody["q_Idx"];
$q_num  = $postbody["q_num"];
$action  = $postbody["action"];

// var_dump($postbody);

$connection = new mysqli("localhost", "test", "cc12345688", "codebehavior");
$connection -> set_charset("UTF8"); // 設定語系避免亂碼

if ($connection->connect_error) {
    die("連線失敗：" . $connection->connect_error);
}
$sqlQuery = "INSERT INTO `behaviorflow`(`user_id`, `question_index`, `question_website_index`, `action`) VALUES ($u_Idx, $q_Idx, $q_num, '$action')";

# 執行 MySQL/MariaDB 指令
if ($connection->query($sqlQuery) === TRUE) {
  # 若有 AUTO_INCREMENT 的 ID 欄位，可直接取得此筆資料的 ID
  echo "成功新增behaviorflow資料";
} else {
  echo "執行失敗：" . $connection->error;
}

# 關閉 MySQL/MariaDB 連線
$connection->close();

?>