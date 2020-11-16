function validateForm() {
    var x = document.forms["contactform"] ["fullname"].value;
    if (x == "") {
        alert ("You must enter your full name");
        return false;
    }
    document.write("Your inquiry has been submitted. Thank you.");
}

