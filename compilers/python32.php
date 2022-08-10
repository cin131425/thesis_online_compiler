<?php
	
	$random = uniqid();
	$CC="py";
	//$out="./a.out";
	$code=$_POST["code"];
	$input=$_POST["input"];
	$filename_code= $random."main.py";
	$filename_in= $random."input.txt";
	$filename_error= $random."error.txt";
	//$executable="a.out";
	$command=$CC." -3 ".$filename_code;
	$command= $command . " < " . $filename_in;
	// $command='py -3 main.py';
	$command_error=$command." 2> ".$filename_error;

	//if(trim($code)=="")
	//die("The code area is empty");

	$file_code=fopen($filename_code,"w+"); 
	fwrite($file_code,$code);
	fclose($file_code);


	$file_in=fopen($filename_in,"w+");
	fwrite($file_in,$input);
	fclose($file_in);
	
	exec("cacls  $executable /g everyone:f"); 
	exec("cacls  $filename_error /g everyone:f");

	shell_exec($command_error);
	$error=file_get_contents($filename_error);

	if(trim($error)=="")
	{
		if(trim($input)=="")
		{
			$output=shell_exec($command);
		}
		else
		{
			$command=$command." < ".$filename_in;
			$output=shell_exec($command);
		}
		echo "<pre>Success!<br><br>$output</pre>";
	}
	else
	{
		echo "<pre>Error!<br><br>$error</pre>";
	}
	exec("del $filename_code");
	exec("del $filename_in");
	exec("del $filename_error");
	// exec("del *.txt");
?>