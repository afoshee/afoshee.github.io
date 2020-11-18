
function dropDown() {
    var x = document.getElementById("higherEd");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function dropDown2() {
    var x = document.getElementById("culture");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function dropDown3() {
    var x = document.getElementById("nonProfit");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function validateForm() {
    var x = document.forms["contactform"] ["fullname"].value;
    if (x == "") {
        alert ("You must enter your full name");
        return false;
    }
    document.write("Your inquiry has been submitted. Thank you.");
}