<?php

	function ConnectToDatabase()
	{
		$connectionstring = 'odbc:Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=C:\\xampp\\htdocs\\example\\Data\\example.mdb';
		$dbHandle =new PDO($connectionstring);
		$dbHandle->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $dbHandle;
	}

?>



