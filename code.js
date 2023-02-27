document.getElementById("fname").innerHTML = prompt("Please enter your full name.");
document.getElementById("username").innerHTML = prompt("Please enter your username.");
	
	if (confirm(`What is your gender?
		Click OK if MALE
		Click CANCEL if FEMALE`)==1){

		alert("Your profile gender has been set to MALE.");
		document.getElementById("gender").innerHTML = "M";
	}

		else {
			alert("Your profile gender has been set to FEMALE.");
			document.getElementById("gender").innerHTML = "F";
		}

document.getElementById("desc").innerHTML = prompt("Type a brief description about yourself.");

var BirthYear = prompt("Please enter your birth year.");

document.getElementById("year").innerHTML = BirthYear;
document.getElementById("age").innerHTML = 2023 - BirthYear;

if (confirm("Do you want to input a custom profile picture?")==1){

		document.getElementById("pic").src = prompt("Please enter file name of picture. (Ex. lastname.png)");
		alert("Profile picture has been updated.");
	}

		else {
			alert("No image has been set. Default image used.");
			document.getElementById("pic").src = prof.png;
		}






	