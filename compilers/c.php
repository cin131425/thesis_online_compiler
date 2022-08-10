<?php
    
    // putenv("PATH=C:\Program Files\CodeBlocks\MinGW\bin");
	
	$random = uniqid();
	$CC="gcc";
	$out="a.exe";
	$code=$_POST["code"];
	$input=$_POST["input"];
	$filename_code = $random."main.c";
	$filename_in = $random."input.txt";
	$filename_error = $random."error.txt";
	$executable = $random."a.exe";
	$command=$CC." -lm ".$filename_code;	
	$command_error=$command." 2>".$filename_error;

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
			$output=shell_exec($out);
		}
		else
		{
			$out=$out." < ".$filename_in;
			$output=shell_exec($out);
		}
		//echo "<pre>$output</pre>";
		echo "<pre>Success!<br><br>$output</pre>";
        //echo "<textarea id='div' class=\"form-control\" name=\"output\" rows=\"10\" cols=\"50\">$output</textarea><br><br>";
	}
	else if(!strpos($error,"error"))
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
		//echo "<pre>$output</pre>";
		echo "<pre>$output</pre>";
                //echo "<textarea id='div' class=\"form-control\" name=\"output\" rows=\"10\" cols=\"50\">$output</textarea><br><br>";
	}
	else
	{
		echo "<pre>Error!<br><br>$error</pre>";
	}
	exec("del $filename_code");
	exec("del *.o");
	exec("del $filename_in");
	exec("del $filename_error");
	exec("del $executable");
?>
