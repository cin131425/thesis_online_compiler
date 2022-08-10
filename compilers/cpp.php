<?php
	// echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
    // putenv("PATH=C:\Program Files\CodeBlocks\MinGW\bin");
	$random = uniqid();
	$CC="g++";
	$out="a.exe";
	$code=$_POST["code"];
	//透過post函式取得剛剛html表單中code欄位的值
	//code area content
	$input=$_POST["input"];
	//透過post函式取得剛剛html表單中input欄位的值
	//input area content
	$filename_code =  $random."main.cpp";
	$filename_in =  $random."input.txt";
	$filename_error =  $random."error.txt";
	$executable =  $random."a.exe";
	$command=$CC." -lm ".$filename_code;
	//g++ -lm main.cpp
	$command_error=$command." 2>".$filename_error;
	//g++ -lm main.cpp 2>error.txt
	
	//if(trim($code)=="")
	//die("The code area is empty");
	
	$file_code=fopen($filename_code,"w+");
	fwrite($file_code,$code);
	fclose($file_code);
	//打開main.cpp文件，w+表示讀寫方式打開，將文件指針指向文件頭並將文件大小截為零。如果文件不存在則嘗試創建之。
	//將$code寫入$file_code文件中，即將code area content寫入main.cpp中
	//關閉打開的文件(main.cpp)

	$file_in=fopen($filename_in,"w+");
	fwrite($file_in,$input);
	fclose($file_in);
	//打開input.txt文件，w+表示讀寫方式打開，將文件指針指向文件頭並將文件大小截為零。如果文件不存在則嘗試創建之。
	//將$input寫入$file_in文件中，即將input area content寫入input.txt中
	//關閉打開的文件(input.txt)

	exec("cacls  $executable /g everyone:f"); 
	//exec 將回傳的內容儲存在變數，並且為 array 的格式，適合用於處理參數
	//修改文件或目錄控制權限的cmd
	//cacls file_name(a.exe)
	// /g 將訪問許可權授予指定用戶
	//給所有人a.exe檔案的存取權限
	exec("cacls  $filename_error /g everyone:f");	
	//給所有人error.txt檔案的存取權限

	shell_exec($command_error);
	//shell_exec 將回傳的內容儲存在變數，並且為純文字內容
	//接受單個參數$cmd，該參數用於保存將要執行的命令。
	//g++ -lm main.cpp 2>error.txt --cmd
	//send c++ compiler error to error.txt in cmd
	//piping stderr to the file, 要用 2> 來把 stderr 的結果輸出到檔案

	$error=file_get_contents($filename_error);
	//把error.txt讀入一個字符串中。
	// echo "$error <br>";
	// print_r($error);
	// echo "trim($error)";


	//compiler success，執行output
	if(trim($error)=="")
	//trim 移除$error中兩側的字符
	{
		if(trim($input)=="")
		{
			$output=shell_exec($out);
		}
		else
		{
			$out=$out." < ".$filename_in;
			//a.exe < input.txt
			$output=shell_exec($out);
		}
		//echo "<pre>$output</pre>";

		// echo <<<HTML
		// Success!/n
		// HTML;
		
		echo "<pre>Success!<br><br><code style="language-cpp">$output</code></pre>";
            //echo "<textarea id='div' class=\"form-control\" name=\"output\" rows=\"10\" cols=\"50\">$output</textarea><br><br>";
	}
	//compiler failed，輸出error狀態
	else if(!strpos($error,"error"))
	//return 字符串在另一個字符第一次出現的位置，如果沒有找到該字符串，則返回 false。
	//$error:規定被搜尋的字串，error:規定要尋找的字符
	{
		echo "<pre>$error</pre>";
		if(trim($input)=="")
		{
			$output=shell_exec($out);
		}
		else
		{
			$out=$out." < ".$filename_in;
			$output=shell_exec($out);
		}
		echo "<pre>$output</pre>";
			//echo "<textarea id='div' class=\"form-control\" name=\"output\" rows=\"10\" cols=\"50\">$output</textarea><br><br>";
	}
	else
	{
		echo "<pre>Error!<br><br>$error</pre>";
	}
	
	exec("del $filename_code");
	//刪除main.cpp
	exec("del *.o");
	//刪除附檔名為o的所有檔案
	exec("del $filename_in");
	exec("del $filename_error");
	//刪除附檔名為txt的所有檔案
	exec("del $executable");
	//刪除a.exe
?>
