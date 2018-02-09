//Error messages - FORM 1
const ERROR_DESC = "ERROR-DESCRIPTION: Numbers, special characters,whitespace or less than 5 characteres description are not accepted.<br>";
const ERROR_ONHAND = "ERROR-ON HAND: Only integer numbers are accepted in this field.<br>";
const ERROR_ONORDER = "ERROR-ON ORDER: Only integer numbers are accepted in this field.<br>";
const ERROR_COST = "ERROR-COST: You should only insert numbers in this field.<br>";
const ERROR_LPRICE = "ERROR-LIST PRICE: You should only insert numbers in this field.<br>";
const ERROR_VENDNO = "ERROR-VENDOR NUMBER: The vendor number field cannot be empty, please type the vendor number";


//Error messages - FORM 2
const ERROR_VENDNAME = "ERROR-VENDOR NAME: Numbers, special characters, whitespace or less than 2 characteres names are not accepted.<br>";
const ERROR_ADDRESS1 = "ERROR-ADDRESS1: It is required that you enter a proper address: e.g.: 555 some street <br>";
const ERROR_ADDRESS2 = "ERROR-ADDRESS2: It is required that you enter a proper address: e.g.: 555 some street <br>";
const ERROR_CITY = "ERROR-CITY: This field is required, please type a city name with more than 2 characters.<br>";
const ERROR_COUNTRY = "ERROR-COUNTRY: This field is required, please select one of the options bellow (US or Canada).<br>";
const ERROR_PROV = "ERROR-PROVINCE: This field is required, please select one of the options bellow.<br>";
const ERROR_PCODE = "ERROR-POSTAL CODE: It is required that you enter a Postal Code in valid format( e.g. for Canada: M2M 2M2) <br>";
const ERROR_PHONE = "ERROR-PHONE NUMBER: It is required that you enter Telephone Number in valid format ( e.g.: 888 888 8888) <br>";
const ERROR_FAX = "ERROR-FAX: If there is a fax number, it is required that you enter it in valid format ( e.g.: 888 888 8888) <br>";

//Error messages - FORM 3
const CHECK_ERROR = "<br />ERROR: You should select at least 3 fields to create the query";

//Functions related to Form 1

function ValidateVendorNo() {
    var vendorNo;
    vendorNo = document.getElementById("vendorno").value;
    if (vendorNo === ""|| vendorNo <1)
    {
        document.getElementById("errormessage1").innerHTML += ERROR_VENDNO;
        document.getElementById("description").focus();
    }
}


function ValidateDescription() {
    var description;

    description = document.getElementById("description").value;
    if (description.length < 5 || description === "" || !isNaN(parseInt(description))) {
        document.getElementById("errormessage1").innerHTML += ERROR_DESC;
        document.getElementById("description").focus();
    }
}

function ValidateOnHand() {
    var onhand;

    onhand = document.getElementById("onhand").value;
    if (onhand === "" || (!Number.isInteger(parseFloat(onhand)))) {
        document.getElementById("errormessage1").innerHTML += ERROR_ONHAND;
        document.getElementById("onhand").focus();
    }
}

function ValidateOnOrder() {
    var onorder;

    onorder = document.getElementById("onorder").value;
    if (onorder === "" || (!Number.isInteger(parseFloat(onorder)))) {
        document.getElementById("errormessage1").innerHTML += ERROR_ONORDER;
        document.getElementById("onorder").focus();
    }
}

function ValidateCost() {
    var cost;

    cost = document.getElementById("cost").value;
    if (cost === "" || isNaN(parseFloat(cost))) {
        document.getElementById("errormessage1").innerHTML += ERROR_COST;
        document.getElementById("cost").focus();
    }
}

function ValidateLPrice() {
    var listprice;

    listprice = document.getElementById("listprice").value;
    if (listprice === "" || isNaN(parseFloat(listprice))) {
        document.getElementById("errormessage1").innerHTML += ERROR_LPRICE;
        document.getElementById("listprice").focus();
    }
}

//Functions related to Form 2
function CheckPostalCode() {
    
    var pCode;

    pCode = document.getElementById("pcode").value;
    if (pCode === "") {
        document.getElementById("errormessage2").innerHTML += ERROR_PCODE;
        document.getElementById("pcode").focus();
    }
}

function CheckPhoneNumber() {
    var regEx = /^\(?\d{3}\)?[\.\-\/\s]?\d{3}[\.\-\/\s]?\d{4}$/;
    var phoneNum;

    phoneNum = document.getElementById("phone").value;
    if (regEx.test(phoneNum) == false || phoneNum === "") {
        document.getElementById("errormessage2").innerHTML += ERROR_PHONE;
        document.getElementById("phone").focus();
    }
}

function CheckFaxNumber() {
    var regEx = /^\(?\d{3}\)?[\.\-\/\s]?\d{3}[\.\-\/\s]?\d{4}$/;
    var faxNum;

    faxNum = document.getElementById("fax").value;
    if (regEx.test(faxNum) == false && faxNum !== "") {
        document.getElementById("errormessage2").innerHTML += ERROR_FAX;
        document.getElementById("fax").focus();
    }
}


function ValidateVendName() {
    var vendName;

    vendName = document.getElementById("vendname").value;
    if (vendName.length < 2 || vendName === "" || !isNaN(parseInt(vendName))) {
        document.getElementById("errormessage2").innerHTML += ERROR_VENDNAME;
        document.getElementById("vendname").focus();
    }
}

function ValidateAddress1()
{
    var address1;
    address1 = document.getElementById("address1").value;
    if (address1.length < 5 || address1 === "") {
        document.getElementById("errormessage2").innerHTML += ERROR_ADDRESS1;
        document.getElementById("address1").focus();
    }
}

function ValidateAddress2()
{
    var address2;
    address2 = document.getElementById("address2").value;
    if (address2.length < 5 || address2 === "") {
        document.getElementById("errormessage2").innerHTML += ERROR_ADDRESS2;
        document.getElementById("address2").focus();
    }
}

function ValidateCity() {
    var city;
    city = document.getElementById("city").value;
    if (city.length < 2 || city === "") {
        document.getElementById("errormessage2").innerHTML += ERROR_CITY;
        document.getElementById("city").focus();
    }
}

function ValidateProv() {
    var prov;
    prov = document.getElementById("province").value;
    if (prov.length < 2 || prov === "") {
        document.getElementById("errormessage2").innerHTML += ERROR_PROV;
        document.getElementById("province").focus();
    }
}

function ValidateCountry() {
    var country;
    country = document.getElementById("country").value;
    if (country !== "us" && country !== "canada") {
		document.getElementById("errormessage2").innerHTML += ERROR_COUNTRY;
        document.getElementById("country").focus();
	}
}


//Function to validate Form 1
function ValidateForm1() {
    document.getElementById("errormessage1").innerHTML = "";
	
    ValidateLPrice();
    ValidateCost();
    ValidateOnOrder();
    ValidateOnHand();
    ValidateDescription();
    ValidateVendorNo();
    
    //If the script finds an error, it will not send the form
    if (document.getElementById("errormessage1").innerHTML != "") {
        return false;
    }
    else
    {
        return true;
    }

}

//Function to validate Form 2
function ValidateForm2() {
    document.getElementById("errormessage2").innerHTML = "";
    	       
	CheckFaxNumber();
    CheckPhoneNumber();
    CheckPostalCode();
    ValidateProv();
    ValidateCountry;
    ValidateCity();
    ValidateAddress2();
    ValidateAddress1();
    ValidateVendName();

    //If the script finds an error, it will not send the form
    if (document.getElementById("errormessage2").innerHTML != "") {
        return false;
    }
    else
    {
        return true;
    }

}

//Function to validate Form 3
function ValidateForm3(){

    
    var parameters = document.forms.namedItem("checkform");
    var i;
    var count = 0;
    var minimumQtt = 3;

    for (i = 0; i < parameters.length; i++) {
        if (parameters[i].checked) {
            count++;
        }
    }

	if (count < minimumQtt){
		
		document.getElementById("errormessage3").innerHTML = CHECK_ERROR;
		return false;
    }
    else {
		return true;		
	}
}

//Function to create a dynamic dropdown list for the provinces
function dynamicdropdown(index) {
    document.getElementById("province").length = 0;
	switch (index)
	{
	case "us" :
		document.getElementById("province").options[0]=new Option("Select province","");
		document.getElementById("province").options[1]=new Option("Alaska","alaska");
		document.getElementById("province").options[2]=new Option("Alabama","alabama");
		document.getElementById("province").options[3]=new Option("Arizona","arizona");
		document.getElementById("province").options[4]=new Option("Arkansas","arkansas");
		document.getElementById("province").options[5]=new Option("California","california");
		document.getElementById("province").options[6]=new Option("Connecticut","connecticut");
		document.getElementById("province").options[7]=new Option("Delaware","delaware");
		document.getElementById("province").options[8]=new Option("District of Columbia","districtofcolumbia");
		document.getElementById("province").options[9]=new Option("Florida","florida");
		document.getElementById("province").options[10]=new Option("Georgia","georgia");
		document.getElementById("province").options[11]=new Option("Hawaii","hawaii");
		document.getElementById("province").options[12]=new Option("Idaho","idaho");
		document.getElementById("province").options[13]=new Option("Illinois","illinois");
		document.getElementById("province").options[14]=new Option("Indiana","indiana");
		document.getElementById("province").options[15]=new Option("Iowa","iowa");
		document.getElementById("province").options[16]=new Option("Kansas","kansas");
		document.getElementById("province").options[17]=new Option("Kentucky","kentucky");
		document.getElementById("province").options[18]=new Option("Louisiana","louisiana");
		document.getElementById("province").options[19]=new Option("Maine","maine");
		document.getElementById("province").options[20]=new Option("Maryland","maryland");
		document.getElementById("province").options[21]=new Option("Massachusetts","massachusetts");
		document.getElementById("province").options[22]=new Option("Michigan","michigan");
		document.getElementById("province").options[23]=new Option("Minnesota","minnesota");
		document.getElementById("province").options[24]=new Option("Mississipi","mississipi");
		document.getElementById("province").options[25]=new Option("Missouri","missouri");
		document.getElementById("province").options[26]=new Option("Montana","montana");
		document.getElementById("province").options[27]=new Option("Nebraska","nebraska");
		document.getElementById("province").options[28]=new Option("Nevada","nevada");
		document.getElementById("province").options[29]=new Option("New Hampshire","newhampshire");
		document.getElementById("province").options[30]=new Option("New Jersey","newjersey");
		document.getElementById("province").options[31]=new Option("New Mexico","newmexico");
		document.getElementById("province").options[32]=new Option("New York","newyork");
		document.getElementById("province").options[33]=new Option("North Carolina","northcarolina");
		document.getElementById("province").options[34]=new Option("North Dakota","northdakota");
		document.getElementById("province").options[35]=new Option("Ohio","ohio");
		document.getElementById("province").options[36]=new Option("Oklahoma","oklahoma");
		document.getElementById("province").options[37]=new Option("Oregon","oregon");
		document.getElementById("province").options[38]=new Option("Pennsylvania","pennsylvania");
		document.getElementById("province").options[39]=new Option("Rhode Island","rhodeisland");
		document.getElementById("province").options[40]=new Option("South Carolina","southcarolina");
		document.getElementById("province").options[41]=new Option("South Dakota","southdakota");
		document.getElementById("province").options[42]=new Option("Tennessee","tennessee");
		document.getElementById("province").options[43]=new Option("Texas","texas");
		document.getElementById("province").options[44]=new Option("Utah","utah");
		document.getElementById("province").options[45]=new Option("Vermont","vermont");
		document.getElementById("province").options[46]=new Option("Virginia","virginia");
		document.getElementById("province").options[47]=new Option("Washington","washington");
		document.getElementById("province").options[48]=new Option("West Virginia","westvirginia");
		document.getElementById("province").options[49]=new Option("Wisconsin","wisconsin");
		document.getElementById("province").options[50]=new Option("Wyoming","wyoming");
		break;
	case "canada" :	
		document.getElementById("province").options[0]=new Option("Select province","");
		document.getElementById("province").options[1]=new Option("British Columbia","britishColumbia");
		document.getElementById("province").options[2]=new Option("Ontario","ontario");
		document.getElementById("province").options[3]=new Option("Quebec","quebec");
		document.getElementById("province").options[4]=new Option("Alberta","alberta");
		document.getElementById("province").options[5]=new Option("Nova Scotia","novaScotia");
		document.getElementById("province").options[6]=new Option("Newfoundland","newfoundland");
		document.getElementById("province").options[7]=new Option("Saskatchewan","saskatchewan");
		document.getElementById("province").options[8]=new Option("Manitoba","manitoba");
		document.getElementById("province").options[9]=new Option("New Brunswick","newBrunswick");
        document.getElementById("province").options[10] = new Option("Prince Edward Island", "princeEdwardIsland");

        break;			
	}
}

