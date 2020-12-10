function validate2() {
    valCheck = true;
    var resultEmailCheck = emailCheck(document.forms["contact information"]["email"].value);
    var image1 = getImage(Boolean(resultEmailCheck), "email");
    var labelNotifyEmail1=getNotification(Boolean(resultEmailCheck), "email") ;
    document.getElementById("Email").appendChild(image1);
    document.getElementById("Email").appendChild(labelNotifyEmail1);
	var resultPhoneCheck = phoneCheck(document.forms["contact information"]["phone"].value);
	var image2 = getImage(Boolean(resultPhoneCheck), "phone");
	var labelNotifyPhone = getNotification(Boolean(resultPhoneCheck), "phone");
	document.getElementById("Phone").appendChild(image2);
	document.getElementById("Phone").appendChild(labelNotifyPhone);
	var resultAddressCheck = addressCheck(document.forms["contact information"]["address"].value);
	var image3 = getImage(Boolean(resultAddressCheck), "address");
	var labelNotifyAddress = getNotification(Boolean(resultAddressCheck), "address");
	document.getElementById("Address").appendChild(image3);
	document.getElementById("Address").appendChild(labelNotifyAddress);
}

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }
	if(ID == "email")
		label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
    if(ID == "phone")
		label.innerHTML = bool ? "" : "Phone number should be in the form xxx-xxx-xxxx or xxxxxxxxxx,x should be numeric";
	if(ID == "address")
		label.innerHTML = bool ? "" : "Address should be in city,state format";
	return label;
}


function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
}


function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function numCheck(entry) {
    let regex = /^[0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}
function phoneCheck(phone) {
	atSplit = phone.split('-');
	if(atSplit.length==3)
		if(atSplit[0].length == 3  && atSplit[1].length == 3 && atSplit[2].length == 4)
			return numCheck(atSplit[0]) && numCheck(atSplit[1]) && numCheck(atSplit[2]);
if(phone.length == 10 && numCheck(phone))
		return true;
}

function addressCheck(address){
	atSplit = address.split(',');
	if(atSplit.length ==2)
		return true;
	else
		return false;
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
