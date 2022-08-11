<?php
    // 設定 MySQL 的連線資訊並開啟連線
    // 資料庫位置、使用者名稱、使用者密碼、資料庫名稱
    $link = mysqli_connect("localhost", "test", "cc12345688", "codebehavior");
    $link -> set_charset("UTF8"); // 設定語系避免亂碼

    if (isset($_POST['testerid'], $_POST['testerMajor'], $_POST['testerAge'], $_POST['codeExperience'], $_POST["question"])) {
        $id = $_POST["testerid"];
        $major = $_POST["testerMajor"];
        $age = $_POST["testerAge"];
        $experience = $_POST["codeExperience"];
        $language = $_POST["language"];
        $q = $_POST["question"];
        // $q = 1,2,3
        $q_1 = $q[0];
        $q_2 = $q[2];
        $q_3 = $q[4];
        $sql = "INSERT INTO  `participants` (`user_id`, `age`, `major`, `experience`,`language`, `question_1`, `question_2`, `question_3`) VALUE (?, ?, ?, ?, ?, ?, ?, ?) ";
        print_r($major);
        
        $stmt = $link->prepare($sql) or die("Failed Execution");
        $stmt->bind_param('ssssssss', $id, $age, $major,$experience, $language, $q_1, $q_2, $q_3);
        
        $stmt->execute();
        echo $stmt->error;
    }
    else {
        echo 'fail';
    }

?>

