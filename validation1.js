function validate1() {
	valCheck = true; 
	var firstName = document.forms["info"]["first name"].value;
    var isValidateFname = validateFname(firstName);
	var image1 = getImage(Boolean(isValidateFname), "first name");
    var labelNotifyFirstName=getNotification(Boolean(isValidateFname), "first name") ;
    document.getElementById("FirstName").appendChild(image1);
    document.getElementById("FirstName").appendChild(labelNotifyFirstName);
	var lastName =  document.forms["info"]["last name"].value;
	var isValidateLname = validateLname(lastName);
	var image2 = getImage(Boolean(isValidateLname), "last name");
    var labelNotifyLastName=getNotification(Boolean(isValidateLname), "last name") ;
    document.getElementById("LastName").appendChild(image2);
    document.getElementById("LastName").appendChild(labelNotifyLastName);
	
	// technically, since gender and state have default values,
	// they are always selected and thus valid
	document.getElementById("Gender").appendChild(getValidImage());
	document.getElementById("State").appendChild(getValidImage());
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}
function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }
	if(ID == "first name")
		label.innerHTML = bool ? "" : "First name should be alphanumeric";
    
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

function getValidImage() {
	var image = new Image(15, 15);
	image.id = "validImage";
	image.src = './correct.png';
	return image;
}
function validateFname(firstName) {
  
	if (firstName == "" || !alphaNumCheck(firstName)) {
		
		return false;
	}
	else 
		return true;
  
}
function validateLname(lastName){
	if (lastName == "" || !alphaNumCheck(lastName)) {
		
		return false;
	}
	else 
		return true;
	
}
