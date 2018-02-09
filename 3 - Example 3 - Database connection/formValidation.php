<?php

	//Functions to validate entries of FORM 1 (PARTS)
	$message = "";
	//Server side check for DESCRIPTION entry
	function ValidateDescription ($description){
		global $message;
		if ( strlen($description)<5 || $description == "" || is_numeric($description))
		{
			$message = "Invalid description<br>";
			echo $message;
		}	
	}
	
	//Server side check for ON HAND quantity entry
	function ValidateOnHand ($onhand){
		global $message;
		if (!is_numeric($onhand) || is_float($onhand))
		{
			$message = "Invalid quantity on hand<br>";
			echo $message;
		}
	}
	
	//Server side check for ON ORDER quantity entry
	function ValidateOnOrder ($onorder){
		global $message;
		if (!is_numeric($onorder) || is_float($onorder))
		{
			$message = "Invalid quantity on order<br>";
			echo $message;
		}
	}
	
	//Server side check for COST entry
	function ValidateCost ($cost){
		global $message;
		if (!is_numeric($cost))
		{
			$message = "Invalid cost<br>";
			echo $message;
		}
	}
	
	//Server side check for LIST PRICE entry
	function ValidateLPrice ($listprice){
		global $message;
		if (!is_numeric($listprice))
		{
			$message = "Invalid List price<br>";
			echo $message;
		}
	}
	
	
	//Functions to validate entries of FORM 2 (VENDORS)
	
	//Server side check for VENDOR NAME entry
	function ValidateVendName ($vendname){
		global $message;
		if ( strlen($vendname)<5 || $vendname == "" || is_numeric($vendname))
		{
			$message = "Invalid Vendor name<br>";
			echo $message;
		}
	}
	
	//Server side check for ADDRESS1 entry
	function ValidateAddress1 ($address1){
		global $message;
		if ( strlen($address1)<5 || $address1 == "" || is_numeric($address1))
		{
			$message = "Invalid Address1<br>";
			echo $message;
		}
	}
	
	//Server side check for ADDRESS2 entry
	function ValidateAddress2 ($address2){
		global $message;
		if ( strlen($address2)<5 || $address2 == "" || is_numeric($address2))
		{
			$message = "Invalid Adress2<br>";
			echo $message;
		}
	}
	
	//Server side check for CITY entry
	function ValidateCity ($city){
		global $message;
		if ( strlen($city)<2 || $city == "" || is_numeric($city))
		{
			$message = "Invalid city<br>";
			echo $message;
		}
	}
	
	//Server side check for COUNTRY entry
	function ValidateCountry ($country){
		global $message;
		if ( $country != "us" && $country != "canada")
		{
			$message = "Invalid country<br>";
			echo $message;
		} 
	}
	
	//Server side check for PROVINCE entry
	function ValidateProvince ($province){
		global $message;
		if ( strlen($province)<2 || $province == "" || is_numeric($province))
		{
			$message = "Invalid province<br>";
			echo $message;
		} 
	}
	
	//Server side check for POSTAL CODE entry
	function CheckPostalCode($pcode){
		global $message;
				
		
		if ($pcode == ""){
			$message = "Invalid postal code<br>";
			echo $message;
		}
	}
	
	//Server side check for PHONE NUMBER entry
	function CheckPhoneNumber($phone){
		global $message;
		$expression = '/^\(?\d{3}\)?[\.\-\/\s]?\d{3}[\.\-\/\s]?\d{4}$/';
		
		$valid = (bool)preg_match($expression, $phone);
		if ($valid== false || $phone == ""){
			$message = "Invalid phone number <br>";
			echo $message;
		}
	}
	
	//Server side check for FAX NUMBER entry
	function CheckFaxNumber($fax){
		global $message;
		$expression = '/^\(?\d{3}\)?[\.\-\/\s]?\d{3}[\.\-\/\s]?\d{4}$/';
		
		$valid = (bool)preg_match($expression, $fax);
		if ($valid== false && $fax != ""){
			$message = "Invalid fax number <br>";
			echo $message;
		}
	} 

	
	//Check if all the information of FORM1 - PARTS is valid
	function ValidateParts ($partInfo){
		global $message;
		$message = "";
		ValidateDescription($partInfo["description"]);
		ValidateOnHand($partInfo["onhand"]);
		ValidateOnOrder($partInfo["onorder"]);
		ValidateCost($partInfo["cost"]);
		ValidateLPrice($partInfo["listprice"]);
		
		if ($message !==""){
			return false;
		}else{
			return true;
		}
	}
	
	//Check if all the information of FORM2 - VENDORS is valid
	function ValidateVendors ($vendorInfo){
		global $message;
		$message = "";
		ValidateVendName($vendorInfo["vendname"]);
		ValidateAddress1($vendorInfo["address1"]);
		ValidateAddress2($vendorInfo["address2"]);
		ValidateCity($vendorInfo["city"]);
		ValidateCountry($vendorInfo["country"]);
		ValidateCity($vendorInfo["city"]);
		CheckPostalCode($vendorInfo["pcode"]);
		CheckPhoneNumber($vendorInfo["phone"]);
		CheckFaxNumber($vendorInfo["fax"]);
		
		if ($message ==""){
			return true;
		}else{
			return false;
		}	
	}
	
	//Check the information selected in checkbox
	function ValidateParameters($parameterInfo){
		$minimumQtt = 3;
		if( count($parameterInfo) < $minimumQtt){
			echo "Selected parameters less than 3 - Invalid! <br>";
			return false;
		}
		else {
			return true;
		}		
	}
	
?>

